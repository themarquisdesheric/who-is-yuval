<script lang="ts">
	import Nav from '../components/Nav.svelte'

	export let segment: string

	const socialLinks = {
		twitter: 'https://twitter.com/esotericsheric',
		linkedin: 'https://www.linkedin.com/in/yuval-allweil/',
		github: 'https://github.com/themarquisdesheric',
		instagram: 'https://www.instagram.com/themarquisdesheric/',
	}
	const socialLinksEntries = Object.entries(socialLinks)
</script>

<div class:home={!segment}>
	<Nav {segment} />
	<main class="max-width relative flex mx-auto my-0 py-8">
		<slot />
	</main>
	<footer class="text-center pt-2 pb-14 font-light">
		<div class="text-center mt-8">
			{#each socialLinksEntries as [key, value], index}
				<span
					class:mr-4={index !== socialLinksEntries.length - 1}
					title={key}
				>
					<a href={value} target="_blank" rel="noopener noreferrer">
						<img src="{key}.svg" alt={key} />
					</a>
				</span>
			{/each}
		</div>
	</footer>
</div>

<style>
	.home main {
		justify-content: center;
		max-width: unset;
		width: unset;
		margin-top: 0;
		padding: 0;
		background-color: unset;
	}

	main {
		width: calc(100% - 4rem);
		margin-top: 57px;
		/* 100vh - header - footer */
		min-height: calc(100vh - 56px - 121px);
		background-color: white;
		box-sizing: border-box;
	}

	span {
		display: inline-block;
		background: black;
		border-radius: 50%;
	}

	img {
		width: 2rem;
    padding: .6rem;
	}

	img[src="github.svg"] {
		padding: 0.5rem;
	}
</style>
