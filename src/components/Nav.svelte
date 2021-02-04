<script lang="ts">
	import NavLink from './NavLink.svelte'

	export let segment: string
	const linkNames: string[] = ['blog', 'contact']
	let isMobileMenuOpen = false
	
	const toggleMobileMenu = () =>
		isMobileMenuOpen = !isMobileMenuOpen
	
	$: maxHeight = isMobileMenuOpen ? '175px' : '0px'
</script>

<nav class="fixed top-0 left-0 w-full z-10 bg-white" class:splashPage={!segment}>
	<!-- mobile menu -->
	{#if isMobileMenuOpen}
		<div class="click-catcher" on:click={toggleMobileMenu} />
	{/if}
	<ul
		class="mobile-menu text-center overflow-hidden font-extralight"
		style="--maxHeight: {maxHeight};"
	>
		{#each linkNames as linkName}
			<NavLink {segment} {linkName} mobileMenu={true} {toggleMobileMenu} />
		{/each}
	</ul>

	<!-- logo -->
	<div class="max-width flex justify-between mx-auto">
		<div>
			<a
				href="."
				class="logo font-extrabold pl-0"
			>yuval allweil</a>
		</div>
	
		<button class="hamburger-menu flex items-center justify-center w-8 relative">
			<img src="menu.png" alt="hamburger menu" class="py-3 w-5" on:click={toggleMobileMenu}>
		</button>

		<!-- regular menu -->
		<ul class="regular-menu flex font-extralight m-0 p-0">
			{#each linkNames as linkName}
				<NavLink {segment} {linkName} />
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		box-shadow: 0 1px 4px rgba(0,0,0,.18);
	}

	nav.splashPage {
		box-shadow: none;
		background-color: unset;
	}

	nav > div {
    width: calc(100% - 4rem);
	}
	
	div :global(a) {
		text-decoration: none;
		display: block;
	}

	.click-catcher {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.mobile-menu {
		transition: max-height 0.3s ease-out;
		background: rgb(17, 24, 39);
		max-height: var(--maxHeight);
		color: #fff;
	}

	.mobile-menu :global(li) {
		margin: 1rem 0;
	}

	.logo {
		padding: 1em 0.5em 1em 0;
	}

	.hamburger-menu {
    left: .45rem;
	}

	.regular-menu {
		display: none;
	}

	.regular-menu :global(a) {
		padding: 1em 0;
		margin: 0 .5em;
	}

	.regular-menu :global(li):last-child :global(a) {
		margin-right: 0;
	}

	.regular-menu :global([aria-current]) {
		position: relative;
		display: inline-block;
	}

	.regular-menu :global([aria-current]::after) {
		position: absolute;
		content: '';
		width: calc(100% - .7em);
		height: 2px;
		background-color: rgb(0, 0, 0);
		display: block;
		bottom: -1px;
	}

	@media (min-width: 400px) {
		.hamburger-menu,
		.mobile-menu {
			display: none;
		}

		.regular-menu {
			display: flex;
		}
	}
</style>
