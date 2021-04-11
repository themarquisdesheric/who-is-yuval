<script lang="ts" context="module">
  export const preload = async (_, { API_KEY, dev }) => ({
    token: API_KEY,
    dev
  })
</script>

<script lang="ts">
  import GithubDashboard from '../../components/GithubDashboard.svelte'

  export let token: string
  export let dev: boolean
</script>

<svelte:head>
	<title>Work | Who is Yuval?</title>
</svelte:head>

<div class="w-full">
  <h1 class="text-lg pb-2">Work</h1>
  <GithubDashboard {token} {dev} />
</div>
