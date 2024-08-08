<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from '$lib/components/graphics/logo.svelte';

	let overlayEl: HTMLDivElement;

	onMount(() => {
		new simpleParallax(overlayEl, {
			delay: 0,
			orientation: 'up',
			scale: 1.4,
			overflow: true
		});
	});
</script>

<div class="overlay" bind:this={overlayEl}>
	<div class="item">
		<Logo />
	</div>
</div>

<style lang="scss">
	@import '../../styles/responsive.scss';

	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		mix-blend-mode: difference;
		pointer-events: none;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;

		.item {
			width: 100%;
			height: 100%;
			transform: scale(1.3) translateX(-2%) translateY(-4%);
		}
	}
</style>
