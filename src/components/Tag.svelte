<script lang="ts">
  export let tag = ''
  export let className = ''
</script>

<a
  href="/tags/{tag}"
  rel="prefetch"
  class="tag text-xs border rounded p-1 bg-gray-50 truncate mr-2 {className}"
>
  {tag}
</a>

<style>
  :global(.prose) a,
  a {
    text-decoration: none;
    font-weight: 300;
    white-space: nowrap;
    max-height: 1.625rem;
  }

  .tag:last-of-type {
    margin-right: 0;
  }
</style>
