<script lang="ts">
  import { blogPosts } from '../../content'
</script>

<svelte:head>
	<title>Blog Posts | Who is Yuval?</title>
</svelte:head>

<div class="w-full">
  <h1 class="text-4xl font-extrabold">Musings on art, tech, and code</h1>
  <div class="prose">
    {#each blogPosts as { slug, title }}
      <a href="/blog/{slug}">
        <p>{title}</p>
      </a>
    {/each}
  </div>
</div>
