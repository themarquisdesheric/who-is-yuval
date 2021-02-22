import { calcLangPercentages, updateLanguageTotals, sortLanguagePercentages }  from './utils'
import type { RepoLangStats } from './types'

describe('updateLanguageTotals', () => {
  it('should calculate the totals for each language', () => {
    const totals = {
      JavaScript: 500,
      TypeScript: 700,
      total: 1200,
    }
    const repoLangStats: RepoLangStats = {
      JavaScript: 500,
      TypeScript: 300, 
      Python: 200, 
    }

    const expectedResult = {
      JavaScript: 1000,
      TypeScript: 1000,
      Python: 200,
      total: 2200,
    }
  
    updateLanguageTotals(repoLangStats, totals)
  
    expect(totals).toEqual(expectedResult)
  })
})

describe('calcLangPercentages', () => {
  it('should calculate the percentages of each language for each repo', () => {
    const totals = {
      JavaScript: 500,
      TypeScript: 300, 
      Python: 200, 
      total: 1000,
    }

    const expectedResult = {
      JavaScript: 50,
      TypeScript: 30,
      Python: 20,
    }

    const result = calcLangPercentages(totals)

    expect(result).toEqual(expectedResult)
  })

  it('should calculate the percentages of each language for each repo, rounding the output', () => {
    const totals = {
      JavaScript: 700,
      TypeScript: 420, 
      Python: 250, 
      total: 1370, 
    }

    const expectedResult = {
      JavaScript: 51,
      TypeScript: 31,
      Python: 18,
    }

    const result = calcLangPercentages(totals)

    expect(result).toEqual(expectedResult)
  })
})

describe('sortLanguagePercentages', () => {
  it('should sort the languages by highest percentage', () => {
    const languagePercentages = {
      JavaScript: 200,
      TypeScript: 300, 
      Python: 100, 
      Shell: 500,
    }

    const result = sortLanguagePercentages(languagePercentages)
    // using keys since snapshots don't preserve object property order
    const resultKeys = Object.keys(result)
    const expectedResult = ['Shell', 'TypeScript', 'JavaScript', 'Python']

    expect(resultKeys).toEqual(expectedResult)
    
    const languagePercentagesKeys = Object.keys(languagePercentages)

    expect(resultKeys).not.toEqual(languagePercentagesKeys)
  })
})
