import { writable } from 'svelte/store'

const initialState = {
  pieChartLanguageTotals: undefined,
  currentProject: undefined,
  mostPopularRepo: undefined,
}

export default writable(initialState)
