<script lang="ts">
  import { workLogos } from './data'
</script>


<div class="logos">
  {#each workLogos as { href, src, alt }}
    <a {href} target="_blank">
      <img {src} {alt} title={alt} />
    </a>
  {/each}
</div>


<style>
  img[src="/work/kroger.png"] { grid-area: kroger; }
  img[src="/work/theo.png"] { grid-area: theo; }
  img[src="/work/dotandbo.png"] {
    grid-area: dotandbo;
    height: 20px;
  }
  img[src="/work/apache.png"] { grid-area: apache; }
  img[src="/work/snowpeak.png"] { grid-area: snowpeak; }
  img[src="/work/deathwish.png"] { grid-area: deathwish; }
  
  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* if grid available */
    display: grid;
    row-gap: 1rem;
    column-gap: 1rem;
    grid-template-areas: 
      "kroger theo"
      "dotandbo apache"
      "snowpeak deathwish";
  }
  
  .logos a {
    justify-self: center;
    align-self: center;
  }

  .logos img:not([src="/work/dotandbo.png"]) {
    height: 40px;
  }

  @media (min-width: 400px) {
    .logos {
      grid-template-areas: 
        "kroger theo dotandbo"
        "apache snowpeak deathwish";
    }
  }

  @media (min-width: 700px) {
    .logos {
      grid-template-areas: 
        "kroger theo dotandbo apache snowpeak deathwish";
    }
  }
</style>
