<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js';

  const langPercentages = {
    "JavaScript": 80,
    "Shell": 9,
    "Python": 1,
    "TypeScript": 9
  }  
  let ctx;

  onMount(() => {
    new Chart(ctx, {
        type: 'pie',
        data: {
          labels: Object.keys(langPercentages),
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
  })
</script>


<section class="flex items-center">
  <canvas bind:this={ctx} />
</section>


<style>
  section {
    height: 100vh;
  }
  
  @media (min-width: 1300px) {
    canvas {
      max-width: 75%;
      margin: 0 auto;
    }
  }
</style>
