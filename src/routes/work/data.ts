type Logo = {
  href: string,
  src: string,
  alt: string,
}

export const workLogos: Logo[] = [
  {
    href: 'https://www.kroger.com/',
    src: '/work/kroger.png',
    alt: 'Kroger logo'
  },
  {
    href: 'https://theochocolate.com/',
    src: '/work/theo.png',
    alt: 'Theo Chocolate logo'
  },
  {
    href: 'https://www.dotandbo.com/',
    src: '/work/dotandbo.png',
    alt: 'Dot & Bo logo'
  },
  {
    href: 'https://datafu.apache.org/',
    src: '/work/apache.png',
    alt: 'Apache logo'
  },
  {
    href: 'https://www.snowpeak.com/',
    src: '/work/snowpeak.png',
    alt: 'Snow Peak logo'
  },
  {
    href: 'https://www.deathwishcoffee.com/',
    src: '/work/deathwish.png',
    alt: 'Death Wish Coffee logo'
  },
]

const mockLanguageTotals = {
  JavaScript: 80,
  Shell: 9,
  TypeScript: 9,
  Python: 1,
}

export const mockPieChartData = {
  pieChartLanguageTotals: mockLanguageTotals,
  projectCountersLanguageTotals: mockLanguageTotals,
  mostPopularRepo: {
    name: 'simply-svelte-autocomplete',
    description: 'A lightweight typeahead component written in SvelteJS',
    stargazers_count: 15,
    forks_count: 4,
    html_url: 'https://github.com/themarquisdesheric/simply-svelte-autocomplete'
  },
  currentProject: {
    name: 'who-is-yuval',
    description: 'New version of personal site: New version of personal site: New version of personal site',
    html_url: 'https://github.com/themarquisdesheric/who-is-yuval'
  },
}
