import fetch from 'isomorphic-fetch'
import Chart from 'chart.js'
import type {
  Repo,
  RepoLangStats,
  OptionalLanguageTotals,
  LanguageTotals,
  LanguageTotalsOrEmpty,
  FetchPieChartDataArgs,
} from '../../types'

/**
 * adds each repo's language statistics to the running total
 */
export const updatePieChartLanguageTotals = (repoStats: RepoLangStats, totals: OptionalLanguageTotals): void =>
  Object.keys(repoStats).forEach((lang) => {
    if (!totals[lang]) totals[lang] = 0

    totals[lang] += repoStats[lang]
    totals.total += repoStats[lang]
  })

/**
 * adds each repo's dominant language for the project counters that surround the pie chart
 */

export const updateProjectCountersLanguageTotals = (repoStats: RepoLangStats, totals: OptionalLanguageTotals): void => {
  let repoLanguage

  if (repoStats['Python']) {
    repoLanguage = 'Python'
  } else if (repoStats['TypeScript']) {
    repoLanguage = 'TypeScript'
  } else if (repoStats['JavaScript']) {
    repoLanguage = 'JavaScript'
  } else if (repoStats['Shell']) {
    repoLanguage = 'Shell'
  }

  if (repoLanguage) {
    if (!totals[repoLanguage]) totals[repoLanguage] = 0

    totals[repoLanguage] += 1
  }
}

/**
 * returns the repo statistics as percentages
 */

export const calcLangPercentages = (languageTotals: OptionalLanguageTotals): LanguageTotalsOrEmpty => {
  const { total } = languageTotals

  return Object.keys(languageTotals)
    .reduce((languagePercentages, lang) => {
      if (lang === 'total') return languagePercentages;

      languagePercentages[lang] = Math.round(languageTotals[lang] / total * 100);

      return languagePercentages;
    }, {})
}

export const sortLanguagePercentages = (languagePercentages) => {
  // convert to array to sort
  const sortedLanguagePercentages = Object.entries(languagePercentages).sort(
    (a: [string, number], b: [string, number]) =>
      b[1] - a[1]
  )
  // reconstitute object in order
  return sortedLanguagePercentages.reduce((accumulator, current) => ({
    ...accumulator,
    [current[0]]: current[1],
  }), {})
}

/**
 * gets most recently updated repo
 */
const getCurrentProject = (repos: Repo[]) =>
  repos.sort((a, b) =>
    new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf()
  )[0]

export const fetchPieChartData = ({ setStore, token }: FetchPieChartDataArgs) => {
  const headers = new Headers({
    Authorization: `token ${token}`,
  })
  const pieChartLanguageTotals = {
    total: 0
  }
  const projectCountersLanguageTotals = {}
  let currentProject

  fetch('https://api.github.com/users/themarquisdesheric/repos?per_page=100', { headers })
    .then(res => res.json())
    .then(repos => {
      repos = repos.filter(repo =>
        repo.owner.login === 'themarquisdesheric' && repo.name !== 'incubator-datafu' && !repo.private
      )
      currentProject = getCurrentProject(repos)
      
      const mostPopularRepo = repos.sort((a, b) =>
        b.stargazers_count - a.stargazers_count
      )[0]
      // get language statistics for each repo
      const promises = repos.map(repo =>
        fetch(repo.languages_url, { headers })
          .then(res => res.json())
          .then(repoStats => {
            ['HTML', 'CSS', 'SCSS', 'Svelte'].forEach(lang =>
              delete repoStats[lang]
            )
            updatePieChartLanguageTotals(repoStats, pieChartLanguageTotals)
            updateProjectCountersLanguageTotals(repoStats, projectCountersLanguageTotals)
          }))

      Promise.all(promises)
        .then(() => {
          const sortedPieChartLanguageTotals = sortLanguagePercentages(
            calcLangPercentages(pieChartLanguageTotals)
          )

          console.log('projectCountersLanguageTotals', projectCountersLanguageTotals);

          setStore({
            pieChartLanguageTotals: sortedPieChartLanguageTotals,
            projectCountersLanguageTotals,
            mostPopularRepo,
            currentProject,
          })
        })
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
