<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Footer from '$lib/components/elements/Footer.svelte';
	import Navigation from '$lib/components/elements/Navigation.svelte';
</script>

{#if $page.route?.id !== '/'}
	<Navigation />
{/if}

<main>
	<slot />
</main>

<Footer />
