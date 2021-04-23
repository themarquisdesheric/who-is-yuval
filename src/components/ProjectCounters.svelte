<script lang="ts">
  import { onMount } from 'svelte'
  import type { LanguageTotals } from '../types'

  export let languageTotals: LanguageTotals

  const maxProjectCount = Math.max(...Object.values(languageTotals))
  let count = 0

  onMount(() => {
		const interval = setInterval(() => {
			count += 1

      if (count === maxProjectCount) clearInterval(interval)
		}, 65)

		return () => interval && clearInterval(interval)
	})
</script>

<div class="project-counters-outer absolute top-0 w-full h-full">
  <div class="project-counters-inner relative mx-auto h-full">
    {#each Object.entries(languageTotals) as [language, projectCount], index}
      <div class="project-counter-{++index} absolute flex flex-col text-center">
        <span class="text-md font-light">{language}</span>
        <span class="text-5xl font-bold">
          {count < projectCount ? count : projectCount}
        </span>
        <span class="text-md font-light">
          project{projectCount > 1 ? 's' : ''}
        </span>
      </div>
    {/each}
  </div>
</div>


<style>
  .project-counters-outer {
    display: none;
  }

  .project-counters-inner {
    max-width: 864px;
  }

  .project-counter-1 {
    top: 0;
  }
  
  .project-counter-2 {
    top: 0;
    right: 0;
  }
  
  .project-counter-3 {
    bottom: 0;
  }

  .project-counter-4 {
    bottom: 0;
    right: 0;
  }

  @media (min-width: 768px) {
    .project-counters-outer {
      display: block;
    }
  }
</style>
