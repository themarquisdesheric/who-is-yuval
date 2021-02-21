export type BlogPost = {
  title: string
  summary: string
  date: Date
  html: string
  slug: string
  tags: string[]
}

export type LanguageTotals = {
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
