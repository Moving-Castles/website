<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Footer from '$lib/components/elements/Footer.svelte';
	import Navigation from '$lib/components/elements/Navigation.svelte';

	console.log('$page', $page);
</script>

{#if $page.route?.id !== '/'}
	<Navigation />
{/if}

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		line-height: 1.4em;
	}
</style>
