<script>
	import '../app.css';
	import Navigation from '$lib/components/navigation.svelte';
	import Footer from '$lib/components/footer.svelte';
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
