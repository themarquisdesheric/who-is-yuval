<script lang="ts">
  import { blogPosts } from '../../content'
</script>

<svelte:head>
	<title>Blog Posts | Yuval Allweil</title>
</svelte:head>

<div class="w-full">
  <h1 class="text-lg pb-2">Blog Posts</h1>
  
  <div class="prose">
    {#each blogPosts as blogPost}
      <a href="/blog/{blogPost.filename.replace('.md', '')}">
        <p>{blogPost.metadata.title}</p>
      </a>
    {/each}
  </div>
</div>
