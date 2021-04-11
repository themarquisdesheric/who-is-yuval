import { updatePieChartLanguageTotals, updateProjectCountersLanguageTotals, calcLangPercentages, sortLanguagePercentages }  from '../utils'
import type { RepoLangStats } from '../../../types'

describe('updatePieChartLanguageTotals', () => {
  it('should calculate the totals for each language, including the total of all languages', () => {
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
  
    updatePieChartLanguageTotals(repoLangStats, totals)
  
    expect(totals).toEqual(expectedResult)
  })
})

describe('updateProjectCountersLanguageTotals', () => {
  it('should calculate the totals for each language', () => {
    const totals = {
      JavaScript: 3,
      TypeScript: 2, 
      Python: 1, 
    }

    const repoLangStats: RepoLangStats = {
      Python: 2300,
      Shell: 400, 
    }

    const expectedResult: RepoLangStats = {
      JavaScript: 3,
      TypeScript: 2, 
      Python: 2, 
    }
  
    updateProjectCountersLanguageTotals(repoLangStats, totals)
  
    expect(totals).toEqual(expectedResult)
  })

  it('should set the language in `totals` if it does not exist, and calculate the totals for each language', () => {
    const totals = {
      JavaScript: 3,
      TypeScript: 2, 
      Python: 1, 
    }

    const shellRepo: RepoLangStats = {
      Shell: 400,
    }

    const expectedResult: RepoLangStats = {
      JavaScript: 3,
      TypeScript: 2, 
      Python: 1,
      Shell: 1,
    }

    updateProjectCountersLanguageTotals(shellRepo, totals)

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
