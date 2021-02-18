<script lang="ts">
  import type { LanguageTotals } from '../types'

  export let numberOfProjects: LanguageTotals
</script>

<div class="project-counters-outer absolute top-0 w-full h-full">
  <div class="project-counters-inner relative mx-auto h-full">
    {#each Object.keys(numberOfProjects) as language, index}
      <div class="project-counter-{++index} absolute flex flex-col text-center">
        <span class="text-md font-light">{language}</span>
        <span class="text-5xl font-bold">21</span>
        <span class="text-md font-light">projects</span>
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
    left: 2rem;
  }
  
  .project-counter-2 {
    top: 0;
    right: 2rem;
  }
  
  .project-counter-3 {
    bottom: 0;
    left: 2rem;
  }

  .project-counter-4 {
    bottom: 0;
    right: 2rem;
  }

  @media (min-width: 768px) {
    .project-counters-outer {
      display: block;
    }
  }
</style>
