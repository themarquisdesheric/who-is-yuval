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
    <p>I currently work as a frontend developer for Kroger, where I bring to life beautiful and intuitive interfaces.</p>
    <p>In the past I've done Conversion Rate Optimization for The Good, worked in several positions at fast-paced startups, and moonlighted as a UX consultant.</p>
    <p>Here are some of the websites I’ve worked on:</p>
    <div><p>logos...</p></div>
  </section>
  <section>
    <h2 class="text-4xl font-extrabold">Projects</h2>
    <p>I’ve worked primarily as a web developer but am interested in all aspects of software development. I find beauty in the diversity of patterns, languages, and paradigms in code. </p>
    <p>Here are some of my favorite tech to work with:</p>
    <div><p>logos...</p></div>
  </section>
  <section>
    <GithubDashboard {token} {dev} />
    <p>Here are some projects I've made over the years:</p>
    <div><p>projects...</p></div>

    {#if $store.currentProject}
      <div>
        <div class="most-popular-repo mx-auto my-8">
          <h3 class="text-2xl font-extrabold">Most Popular Github Repo</h3>
          <p class="font-mono">{$store.mostPopularRepo.name}</p>
          <div class="most-popular-github-info flex text-xs">
            <p class="flex items-center mr-2">
              <img src="star.svg" width="20" alt="star icon" />&nbsp;
              <span>{$store.mostPopularRepo.stargazers_count} stars</span>
            </p>
            <p class="flex items-center">
              <img src="fork-icon.svg" alt="git fork icon" width="20" />&nbsp;
              <span>{$store.mostPopularRepo.forks_count} forks</span>
            </p>
          </div>
          <p class="text-sm">{$store.mostPopularRepo.description}</p>
        </div>
        <div class="mx-auto my-8">
          <h4 class="text-2xl font-extrabold">Current Project</h4>
          <p class="font-mono">{$store.currentProject.name}</p>
          <p class="text-sm">{$store.currentProject.description}</p>
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

  .most-popular-repo > p {
    margin-bottom: 0;
  }

  .most-popular-github-info p {
    margin: 0.5rem 0.5rem 0 0;
  }

  p {
    margin: 1rem 0;
  }
</style>
