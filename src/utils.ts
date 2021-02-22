import fetch from 'isomorphic-fetch'
import Chart from 'chart.js'
import type { RepoLangStats, OptionalLanguageTotals, LanguageTotals } from './types'

/**
 * adds each repo's language statistics to the running total
 */
const updateLanguageTotals = (repoLangStats: RepoLangStats, totals: OptionalLanguageTotals): void =>
  Object.keys(repoLangStats).forEach((lang) => {
    if (!totals[lang]) totals[lang] = 0

    totals[lang] += repoLangStats[lang] 
    totals.total += repoLangStats[lang]
  })

type LanguageTotalsOrEmpty = LanguageTotals | {}

/**
 * returns the repo statistics as percentages
 */
const calcLangPercentages = (languageTotals: OptionalLanguageTotals): LanguageTotalsOrEmpty => {
  const { total } = languageTotals;
  
  const languagePercentages = Object.keys(languageTotals)
    .reduce((accumulator, lang) => {
      if (lang === 'total') return accumulator;

      accumulator[lang] = Math.round(languageTotals[lang] / total * 100);
      
      return accumulator;
    }, {});

  const sortedLanguagePercentages = Object.entries(languagePercentages).sort(
    (a: [string, number], b: [string, number]) =>
      b[1] - a[1]  
  )

  return sortedLanguagePercentages.reduce((accumulator, current) => ({
    ...accumulator,
    [current[0]]: current[1],
  }), {})
};

/**
 * gets most recently updated repo
 */
const getCurrentProject = (repos) =>
  repos.sort((a, b) =>
    new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf()
  )[0]

type FetchPieChartDataArgs = {
  setLanguagePercentages: (languagePercentages: LanguageTotalsOrEmpty) => void,
  setCurrentProject: (currentProject: {}) => void,
  token: string,
}

export const fetchPieChartData = ({ setLanguagePercentages, setCurrentProject, token }: FetchPieChartDataArgs) => {
  const headers = new Headers({
    Authorization: `token ${token}`,
  })
  const languageTotals = {
    total: 0
  }
  
  fetch('https://api.github.com/users/themarquisdesheric/repos?per_page=100', { headers })
    .then(res => res.json())
    .then(repos => {
      repos = repos.filter(repo => 
        repo.owner.login === 'themarquisdesheric' && repo.name !== 'incubator-datafu'
      )

      setCurrentProject(getCurrentProject(repos))
      // get language statistics for each repo
      const promises = repos.map(repo => 
        fetch(repo.languages_url, { headers })
          .then(res => res.json())
          .then(repoStats => {
            ['HTML', 'CSS', 'SCSS', 'Svelte'].forEach(lang =>
              delete repoStats[lang]
            )
            
            updateLanguageTotals(repoStats, languageTotals)
          }))

      Promise.all(promises)
        .then(() =>
          setLanguagePercentages(
            calcLangPercentages(languageTotals)
          )
        )
    })
}

type PieChartArgs = {
  chartContext: string,
  languagePercentages: LanguageTotals,
  languageColors: string[]
}

export const instantiatePieChart = ({
  chartContext,
  languagePercentages,
  languageColors
}: PieChartArgs) =>
  new Chart(chartContext, {
    type: 'pie',
    data: {
      labels: Object.keys(languagePercentages),
      datasets: [{
        data: Object.values(languagePercentages),
        backgroundColor: languageColors,
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false, 
      }
    }
  })
