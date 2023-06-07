<script>
	import '../app.css';
	import Navigation from '$lib/components/navigation.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { mask } from '$lib/transitions';

	export let data;

	const urls = ['/masks/4.jpeg', '/masks/5.png', '/masks/6.png', '/masks/7.png'];
	let url = urls[0];

	$: if (data.key) {
		url = urls[Math.floor(Math.random() * urls.length)];
	}
</script>

{#key data.key}
	<div
		out:mask={{ type: 'image', url, duration: 1500 }}
		class="fixed inset-0 overflow-y-scroll scroller"
	>
		<Navigation />

		<slot />
	</div>
{/key}
