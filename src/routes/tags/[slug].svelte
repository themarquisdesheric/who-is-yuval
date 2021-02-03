<script context="module" lang="ts">
  import type { BlogPost } from "../../types"
  import { findByTag } from '../../content'
  export const preload = async ({ params }) => {
    const matchingPosts = findByTag(params.slug)
    
    return { 
      matchingPosts,
      slug: params.slug,
    }
	}
</script>

<script lang="ts">
  export let matchingPosts: BlogPost[], slug: string
</script>

<svelte:head>
	<title>Tags | Yuval Allweil</title>
</svelte:head>

<div class="w-full">
<h1 class="text-lg font-medium">#{slug}</h1>
  <div class="prose">
    <ul>
      {#each matchingPosts as { slug, title }}
        <li>
          <a href="/blog/{slug}" rel="prefetch">
            {title}
          </a>
        </li>
      {/each}
    </ul>
    <a href="/tags" rel="prefetch" class="text-sm">All Tags</a>
  </div>
</div>

<style>
  a {
		font-family: 'Open Sans', sans-serif;
	}
</style>
