<script>
	import '../app.css';
	import Navigation from '$lib/components/navigation.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Navigation />
<main>
	<slot />
</main>

<!-- <Footer /> -->

<style lang="scss">
	main {
		// line-height: 0;
	}
</style>
