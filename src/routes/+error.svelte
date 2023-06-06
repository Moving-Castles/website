<script lang="ts">
  import { page } from '$app/stores';
  import Navigation from '$lib/components/navigation.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="bg-yellow-500 min-h-screen px-8 pt-24">
  <h1 class="">{$page.status}: {$page?.error?.message}</h1>
  <a href="/">
    Go home
  </a>
</div>