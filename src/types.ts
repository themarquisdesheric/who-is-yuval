export type BlogPost = {
  title: string
  summary: string
  date: Date
  html: string
  slug: string
  tags: string[]
}

export interface LanguageTotals {
  JavaScript: number
  TypeScript: number
  Python: number
  Shell: number
}

export interface OptionalLanguageTotals {
  JavaScript?: number
  TypeScript?: number
  Python?: number
  Shell?: number
  total?: number
}
export interface RepoLangStats extends OptionalLanguageTotals {
  HTML?: number
  CSS?: number
  Svelte?: number
}

export type LanguageTotalsOrEmpty = LanguageTotals | {}

export type Repo = { owner: { login: string }, name: string, languages_url: string, updated_at: string }

export type FetchPieChartDataArgs = {
  setLanguagePercentages: (languagePercentages: LanguageTotalsOrEmpty) => void,
  setCurrentProject: (currentProject: {}) => void,
  token: string,
}
