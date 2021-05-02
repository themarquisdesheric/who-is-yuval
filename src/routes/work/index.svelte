<script lang="ts" context="module">
  export const preload = async (_, { API_KEY, dev }) => ({
    token: API_KEY,
    dev
  })
</script>

<script lang="ts">
  import GithubDashboard from '../../components/GithubDashboard.svelte'
  import LoadingSpinner from '../../components/LoadingSpinner.svelte'
  import store from '../../store'

  export let token: string
  export let dev: boolean
</script>

<svelte:head>
	<title>Work | Who is Yuval?</title>
</svelte:head>

<div class="w-full">
  <section>
    <h1 class="text-4xl font-extrabold">Work</h1>
    <p>I work as a frontend developer for Kroger, where I bring to life beautiful and intuitive interfaces.</p>
    <p>In the past I've done Conversion Rate Optimization for The Good, worked in several positions at fast-paced startups, and moonlighted as a UX consultant.</p>
    <p class="mb-8">Here are some of the websites I’ve worked on:</p>
    <div class="logos">
      <img src="/work/kroger.png" />
      <img src="/work/theo.png" />
      <img src="/work/dotandbo.png" />
      <img src="/work/apache.png" />
      <img src="/work/snowpeak.png" />
      <img src="/work/deathwish.png" />
    </div>
  </section>
  <section>
    <h2 class="text-4xl font-extrabold">Projects</h2>
    <p>I’ve worked primarily with JavaScript as a web developer but am interested in all aspects of software development. I find beauty in the diversity of patterns, languages, and paradigms in code. </p>
    <p>Here are some of my favorite tech to work with:</p>
    <div><p>logos...</p></div>
  </section>
  <section>
    <GithubDashboard {token} {dev} />
    <p>Here are some projects I've made over the years:</p>
    <div><p>projects...</p></div>

    {#if $store.mostPopularRepo}
      <div>
        <div class="most-popular-repo mx-auto my-8">
          <h3 class="text-3xl font-extrabold">Most Popular Github Repo</h3>
          <a href={$store.mostPopularRepo.html_url} target="_blank">
            <p class="font-mono">{$store.mostPopularRepo.name}</p>
            <div class="flex text-xs">
              <p class="stars-forks flex items-center mr-2 font-mono">
                <img src="star.svg" width="20" alt="star icon" class="relative" />&nbsp;
                <span>{$store.mostPopularRepo.stargazers_count} stars</span>
              </p>
              <p class="stars-forks flex items-center font-mono">
                <img src="fork-icon.svg" alt="git fork icon" width="20" />&nbsp;
                <span>{$store.mostPopularRepo.forks_count} forks</span>
              </p>
            </div>
            <p class="text-xs font-mono">{$store.mostPopularRepo.description}</p>
          </a>
        </div>
        <div class="mx-auto my-8">
          <h4 class="text-3xl font-extrabold">Current Project</h4>
          <a href={$store.currentProject.html_url} target="_blank">
            <p class="font-mono">{$store.currentProject.name}</p>
            <p class="text-xs font-mono">{$store.currentProject.description}</p>
          </a>
        </div>
      </div>
    {:else}
      <LoadingSpinner />
    {/if}
  </section>
</div>


<style>
  section {
    margin-bottom: 4rem;
  }

  .logos > img {
    height: 40px;
    justify-self: center;
    align-self: center;
  }

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

  .most-popular-repo a > p {
    margin-bottom: 0;
  }

  .stars-forks {
    margin: 0.5rem 0.5rem 0 0;
  }

  img[src="star.svg"] {
    bottom: 1px;
  }

  p:not(.mb-8) {
    margin: 1rem 0;
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
