<script lang="ts">
	export let segment: string
  export let linkName: string
  export let mobileMenu = false
  export let toggleMobileMenu = () => {}

  $: isHighlighted = (
    segment === linkName ||
    segment === undefined &&
    linkName === 'home'
  ) &&
    mobileMenu
</script>

<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
      the blog data when we hover over the link or tap it on a touchscreen -->
<li on:click={() => mobileMenu && toggleMobileMenu()}>
  <a
    rel={segment !== 'contact' ? 'prefetch' : undefined}
    aria-current={segment === linkName ? 'page' : undefined}
    href={linkName === 'home' ? '/' : linkName}
    class="w-full inline-block"
    class:font-normal={isHighlighted}
  >
    {linkName}
  </a>
</li>
