<script lang="ts">
	import Nav from '../components/Nav.svelte'

	export let segment: string
</script>

<div class:background={!segment}>
	<Nav {segment} />
	<main class="max-width relative flex mx-auto my-0 py-8">
		<slot />
	</main>
	<footer class="text-center py-2 font-light">
		<div class="text-center mt-8">
			<span class="mr-4">
				<a href="https://twitter.com/specimen_mag?lang=en" target="_blank" rel="noopener noreferrer">
					<img src="twitter.svg" alt="twitter" />
				</a>
			</span>
			<span>
				<a href="https://www.instagram.com/specimenmagazine/" target="_blank" rel="noopener noreferrer">
					<img src="instagram.svg" alt="instagram" />
				</a>
			</span>
		</div>
		<small class="block my-2">Yuval Allweil © {new Date().getFullYear()}</small>
	</footer>
</div>

<style>

	.background {
		background: #000 url("/procession_in_the_courtyard_of_the_ducal_palace.jpg") no-repeat center center;
		background-size: cover;
		height: 100vh;
	}

	.background main {
		justify-content: center;
		height: 100vh;
		width: unset;
		margin-top: 0;
    padding: 25vh 0 0;
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
</style>
