<script lang="ts">
  import { onMount } from 'svelte'
  import store from '../store'
  import { fetchPieChartData, instantiatePieChart, mockPieChartData } from '../routes/work/utils'
  import ProjectCounters from './ProjectCounters.svelte'
  import LoadingSpinner from './LoadingSpinner.svelte'

  export let token: string
  export let dev: boolean

  let chartContext

  const languageColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
  ]

  $: chart = chartContext && $store.pieChartLanguageTotals && instantiatePieChart({
    chartContext,
    languagePercentages: $store.pieChartLanguageTotals,
    languageColors
  })

  onMount(() => {
    if (dev) {
      // use mock data instead of calling the API
      store.update(pastStore => ({
        ...pastStore,
        ...mockPieChartData,
      }))
    } else if (!$store.pieChartLanguageTotals) {
      fetchPieChartData({
        setStore: store.set,
        token,
      })
    }
    
    return () => chart.destroy()
  })
</script>


<section class="flex flex-col justify-center">
  <h2 class="text-center font-bold mb-8 text-5xl">Github Dashboard</h2>
  <div class="relative">
    <p class="text-center font-light mb-6">Language Composition of Projects</p>
    
    {#if $store.pieChartLanguageTotals}
      <div class="relative flex justify-center items-center w-full">
        <canvas bind:this={chartContext} />
        <img src="/github-large.png" alt="github logo" class="github-logo absolute" />
      </div>

      <div class="legend flex justify-center mt-8">
        {#each Object.entries($store.pieChartLanguageTotals) as [language, percentage], index (language)}
          <div
            class="flex flex-col items-center"
            class:mr-2={index !== languageColors.length - 1}
            class:sm:mr-8={index !== languageColors.length - 1}
            >
            <span style="background: {languageColors[index]}" class="color-box inline-block mb-2" />
            <span class="font-bold">{language}</span>
            <span class="font-light">{percentage}%</span>
          </div>
        {/each}
      </div>

      <ProjectCounters languageTotals={$store.projectCountersLanguageTotals} />
    {:else}
      <LoadingSpinner />
    {/if}
  </div>

  <!-- use this for project card, not most popular repo -->
  {#if $store.currentProject}
    <div class="mx-auto my-8">
      <h3>Current Project</h3>
      <div class="flex text-small">
        <p class="flex items-center mr-2">
          <img src="star.svg" width="20" alt="star icon" />&nbsp;
          <span>{$store.currentProject.stargazers_count} stars</span>
        </p>
        <p class="flex items-center">
          <img src="fork-icon.svg" alt="git fork icon" width="20" />&nbsp;
          <span>{$store.currentProject.forks_count} forks</span>
        </p>
      </div>
      <p>{$store.currentProject.name}</p>
      <p>{$store.currentProject.description}</p>
    </div>
  {/if}
</section>


<style>
  section {
    height: 100vh;
    background-color: rgba(0, 0, 255, 0.2);
  }

  canvas {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .github-logo {
    width: 60px;
    height: 60px;
    top: calc(50% - 30px); 
    border-radius: 50%;
    background-color: #fff;
  }

  .legend {
    max-width: 735px;
    margin: 2rem auto 0;
  }

  .color-box {
    width: 3.5rem;
    height: 1.25rem;
    border: 1px solid #fff;
  }
</style>
