<script context="module" lang="ts">
	import { findPost } from '../../content'
	import Tag from '../../components/Tag.svelte'
	
  export const preload = async ({ params }) => ({
		blogPost: findPost(params.slug),
	})
</script>

<script lang="ts">
	export let blogPost

	const { title, summary, date } = blogPost
</script>

<svelte:head>
	<title>{title} | Yuval Allweil</title>
</svelte:head>

<div class="prose">
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
		<!-- {#each tags as tag}
			<Tag {tag} className="mb-2" />
		{/each} -->
	</div>
	<div class="article-content">
		SOME HTML
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
		font-family: 'Open Sans';
	}

	.article-content :global(p) {
		font-weight: 400;
		color: #000;
	}

	.prose :global(.interviewer) {
		display: inline-block;
		margin: 1.25rem 0;
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
