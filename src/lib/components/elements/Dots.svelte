<script lang="ts">
	import { onMount } from 'svelte';
	import { generateDotPattern, appendDotPattern } from '$lib/modules/graphics';

	let patternContainer: HTMLDivElement;
	let patternContainer2: HTMLDivElement;

	const drawDotPattern = (el: HTMLDivElement, diameter: number, spacing: number) => {
		let height = el.clientHeight;
		let width = el.clientWidth;
		appendDotPattern(
			el,
			generateDotPattern(diameter, spacing, 'var(--dark-grey)', width, height, -2)
		);
	};

	onMount(() => {
		drawDotPattern(patternContainer, 6, 5);
		// drawDotPattern(patternContainer2, 4, 5);
	});
</script>

<window
	on:resize={() => {
		drawDotPattern(patternContainer, 4, 5);
		// drawDotPattern(patternContainer2, 4, 6);
	}}
/>

<div class="dots">
	<div class="pattern-container" bind:this={patternContainer} />
	<!-- <div class="pattern-container-2" bind:this={patternContainer2} /> -->
</div>

<style lang="scss">
	.dots {
		width: 100%;
		height: 160px;
		pointer-events: none;
		overflow: hidden;
		position: relative;
		// background: orangered;

		.pattern-container {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			// padding-top: 2px;
			// padding: 10px;
		}

		// .pattern-container-2 {
		// 	width: 100%;
		// 	height: 100%;
		// 	position: absolute;
		// 	top: 0;
		// 	left: 3px;
		// 	transform: rotate(5deg);
		// 	// padding-top: 2px;
		// 	// padding: 10px;
		// 	animation: spin 10s linear infinite;
		// }
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
