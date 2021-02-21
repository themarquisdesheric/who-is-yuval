import fetch from 'isomorphic-fetch'
import Chart from 'chart.js'
import type { RepoLangStats, OptionalLanguageTotals, LanguageTotals } from './types'

const getLanguageTotals = (repoLangStats: RepoLangStats, totals: OptionalLanguageTotals): void =>
  Object.keys(repoLangStats).forEach((lang) => {
    if (!totals[lang]) totals[lang] = 0

    totals[lang] += repoLangStats[lang] 
    totals.total += repoLangStats[lang]
  })

type LanguageTotalsOrEmpty = LanguageTotals | {}

const calcLangPercentages = (languageTotals: OptionalLanguageTotals): LanguageTotalsOrEmpty => {
  const { total } = languageTotals;
  
  return Object.keys(languageTotals)
    .reduce((languagePercentages, lang) => {
      if (lang === 'total') return languagePercentages;

      languagePercentages[lang] = Math.round(languageTotals[lang] / total * 100);
      
      return languagePercentages;
    }, {});
};

type PopulatePieChartArgs = {
  setLanguagePercentages: (languagePercentages: LanguageTotalsOrEmpty) => void,
  setCurrentProject: (currentProject: {}) => void,
  token: string,
}

export const populatePieChart = ({ setLanguagePercentages, setCurrentProject, token }: PopulatePieChartArgs) => {
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
        repo.owner.login === 'themarquisdesheric' && 
        repo.name !== 'incubator-datafu'
      )
      // gets most recently updated repo
      const currentProject = repos.sort((a, b) =>
        new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf())[0]

      setCurrentProject(currentProject)
      // get language statistics for each repo
      const promises = repos.map(repo => 
        fetch(repo.languages_url, { headers })
          .then(res => res.json())
          .then(repoStats => {
            console.log('repoStats', repoStats);
            
            delete repoStats.HTML
            delete repoStats.CSS
            delete repoStats.SCSS
            delete repoStats.Svelte
            
            getLanguageTotals(repoStats, languageTotals)
            
            return repo
          }))

      Promise.all(promises)
        .then(() =>
          setLanguagePercentages(
            calcLangPercentages(languageTotals)
          )
    )})
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
