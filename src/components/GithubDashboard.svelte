<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js';

  const langPercentages = {
    "JavaScript": 80,
    "Shell": 9,
    "TypeScript": 9,
    "Python": 1,
  }
  const labels = Object.entries(langPercentages).map(([key, value]) =>
    `${key} (${value}%)`
  )

  let ctx;

  onMount(() => {
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels,
          datasets: [{
            data: Object.values(langPercentages),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderWidth: 1
          }]
      },
    })
    
    return () => chart.destroy()
  })
</script>


<section class="flex items-center">
  <canvas bind:this={ctx} />
</section>


<style>
  section {
    height: 100vh;
    background-color: rgba(0, 0, 255, 0.2);
  }
  
  @media (min-width: 1300px) {
    canvas {
      max-width: 75%;
      margin: 0 auto;
    }
  }
</style>
