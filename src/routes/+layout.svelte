<script>
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navigation />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	main {
		width: 100%;
		background: var(--background-color);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
