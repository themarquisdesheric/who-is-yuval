<svelte:head>
	<title>Yuval Allweil</title>
</svelte:head>

<div class="container primary text-center">
	<h1 class="primary">Who is Yuval?</h1>
	<hr class="primary" />
	<div>
		<p class="secondary text-center">Introduction by</p>
		<h2 class="primary">Jorge Luis Borges</h2>
	</div>
</div>

<style>
	.container {
		/* TODO: change to min-height once you know it */
		height: fit-content;
		width: 50%;
		padding: 1rem 0;
		border: 1px solid;
		background-color: rgb(66, 59, 44);
		color: #fff;
		text-transform: uppercase;
		font-family: 'Open Sans', sans-serif;
	}

	.container div {
		font-size: .85em;
	}

	.primary {
		color: rgb(255, 252, 191);
		border-color: rgb(255, 252, 191);
		font-weight: 600;
	}

	.secondary {
		color: rgb(250, 189, 15);
		border-color: rgb(250, 189, 15);
	}

	h1,
	h2,
	p {
		letter-spacing: 0.05em;
	}

	p {
		font-weight: normal;
	}

	hr {
		max-width: 130px;
		margin: .5rem auto .75rem;
	}
</style>
