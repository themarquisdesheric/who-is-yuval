<svelte:head>
	<title>Who is Yuval?</title>
</svelte:head>

<div class="w-full">
	<section class="book">
		<div class="label primary text-center">
			<h1 class="primary">Who is Yuval?</h1>
			<hr class="primary" />
			<div>
				<p class="secondary text-center">Introduction by</p>
				<h2 class="primary">The Marquis de Sheric</h2>
			</div>
		</div>
	</section>
</div>


<style>
	.book {
		background: #000 url("/procession_in_the_courtyard_of_the_ducal_palace.jpg") no-repeat center center;
		background-size: cover;
		height: 100vh;
		padding-top: 25vh;
	}

	.label {
		/* table is a cross-browser fallback for `height: fit-content` 🙃 */
		display: table;
		height: fit-content;
		width: 210px;
		max-width: 300px;
		margin: auto;
		padding: 1rem 0;
		border: 1px solid;
		background-color: rgb(66, 59, 44);
		color: #fff;
		text-transform: uppercase;
		font-family: 'Open Sans', sans-serif;
	}

	.label div {
		/* fluid font magic https://css-tricks.com/snippets/css/fluid-typography/ */
		font-size: calc(.85em + 4.5 * ((100vw - 320px) / 680));
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

	h1 {
		font-size: calc(16px + 6 * ((100vw - 320px) / 680));
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

	@media screen and (min-width: 425px) {
		.label {
			width: 50%;
		}
	}

	@media screen and (min-width: 1200px) {
		h1 {
			font-size: 24px;
		}

		.label div {
			font-size: 19.5px;
		}
	}
</style>
