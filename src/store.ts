import { writable } from 'svelte/store'

const initialState = {
  pieChartLanguageTotals: undefined,
  projectCountersLanguageTotals: undefined,
  currentProject: undefined,
  mostPopularRepo: undefined,
}

export default writable(initialState)
