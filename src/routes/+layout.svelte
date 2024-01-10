<script>
	import '../app.css';
	import Footer from '$lib/components/elements/Footer.svelte';
</script>

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		line-height: 1.4em;
	}
</style>
