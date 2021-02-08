<script context="module" lang="ts">
	import type { BlogPost } from '../../types'
	import highlight from '../../highlight'
	import { findPost } from '../../content'
	import Tag from '../../components/Tag.svelte'
	
  export const preload = async ({ params }) => ({
		blogPost: findPost(params.slug),
	})
</script>

<script lang="ts">
	export let blogPost: BlogPost

	const { title, summary, date, tags, html } = blogPost
</script>

<svelte:head>
	<title>{title} | Who is Yuval?</title>
</svelte:head>

<div class="prose w-full">
	<header>
		<div class="text-center">
			<h1 class="uppercase">{title}</h1>
			<p class="italic">as written by</p>
			<p class="uppercase text-xl font-extrabold">
				Yuval Allweil
			</p>
		</div>
		<p class="italic">{summary}</p>
		<div class="flex justify-center items-center">
			<div class="border-b w-full mr-3" />
			<p>{date}</p>
			<div class="border-b w-full ml-3" />
		</div>
	</header>
	<div class="flex flex-wrap justify-center my-5">
		{#each tags as tag}
			<Tag {tag} className="mb-2" />
		{/each}
	</div>
	<div use:highlight class="article-content">
		{@html html}
	</div>
</div>

<style>
	header div h1,
	header div p {
		margin: 0;
	}

	header div p {
		text-align: center;
	}

	header div p.italic {
		font-family: serif;
	}

	header .uppercase,
	.prose {
		font-family: 'Open Sans', sans-serif;
	}

	.article-content :global(p) {
		font-weight: 400;
		color: #000;
	}

	.prose :global(.highlight) {
		margin: 4rem auto;
		padding: 1.25rem;
		width: 75%;
		border: 3px solid #000;
		border-radius: 0;
		font-weight: 600;
		letter-spacing: .5px;
		text-align: center;
	}
</style>
