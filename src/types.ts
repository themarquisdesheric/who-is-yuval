export type BlogPost = {
  title: string,
  summary: string,
  date: Date,
  html: string,
  slug: string,
  tags: string[]
}

export type LanguageTotals = {
  "JavaScript": number,
  "TypeScript": number,
  "Python": number,
  "Shell": number,
}
