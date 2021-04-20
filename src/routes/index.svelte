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

	<section class="intro prose mx-auto text-center">
		<h2>An Introduction of Sorts</h2>
		<h3>The Marquis de Sheric</h3>
		<p>
			Yuval Allweil is an autodidact whose curiosity knows no bounds. This curiosity has taken him to the other side of the world, and not just once or twice. This unbridled passion has led him directly into the laboratories of some of today's most brilliant scientists, to distill their work for a more popular audience.
		</p>
		<p>
			His interviews with visionary thinkers like Dr. Judea Pearl and Nir Eyal have headlined Specimen Magazine, and his short fiction has been published in several anthologies. 
		</p>
		<p>
			He has served on the management teams of several startups, from a record-breaking e-commerce outfit to a nationally-acclaimed science magazine.
		</p>
		<p>
			Yuval loves helping others, and firmly believes that you won't get ahead without helping those around you.
			He is a dedicated teacher whose training programs and workshops have been professionally recognized, and continues to tutor students in all aspects of software development. 
		</p>
		<p>
			Yuval is currently a front end developer at <a href="https://www.kroger.com/">Kroger</a>. Check out Alchemy Code Lab's <a href="https://www.alchemycodelab.com/blog/alchemist-yuval-allweil">interview</a> with him to see why he loves what he does.   
		</p>
	</section>
</div>


<style>
	.book {
		background: #000 url("/procession_in_the_courtyard_of_the_ducal_palace.jpg") no-repeat center center;
		background-size: cover;
		padding-top: 25vh;
	}

	.book,
	.intro {
		min-height: 100vh;
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

	section.prose h2 {
		margin-bottom: 0.5rem;
	}

	section.prose h3 {
		margin-bottom: 3rem;
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

	.intro {
		width: calc(100% - 4rem);
		padding-top: 8rem;
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
