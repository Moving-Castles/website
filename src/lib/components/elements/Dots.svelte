<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import { throttle } from 'lodash-es';
	import { generateDotPattern, appendDotPattern } from '$lib/modules/graphics/';

	let patternContainer: HTMLDivElement;
	let patternContainer2: HTMLDivElement;

	const drawDotPattern = (el: HTMLDivElement, diameter: number, spacing: number) => {
		console.log('drawing');
		let height = el.clientHeight;
		let width = el.clientWidth;
		appendDotPattern(
			el,
			generateDotPattern(diameter, spacing, 'var(--dark-grey)', width, height, -2)
		);
	};

	const throttledResizeHandler = throttle(() => {
		drawDotPattern(patternContainer, 6, 5);
	}, 100);

	onMount(() => {
		drawDotPattern(patternContainer, 6, 5);
		window.addEventListener('resize', throttledResizeHandler);
		// drawDotPattern(patternContainer2, 4, 5);
	});

	onDestroy(() => {
		if (!browser) return;
		window.removeEventListener('resize', throttledResizeHandler);
	});
</script>

<div class="dots">
	<div class="pattern-container" bind:this={patternContainer} />
	<!-- <div class="pattern-container-2" bind:this={patternContainer2} /> -->
</div>

<style lang="scss">
	@import '../../styles/responsive.scss';

	.dots {
		width: 100%;
		height: 160px;
		pointer-events: none;
		overflow: hidden;
		position: relative;

		@include screen-size('small') {
			height: 120px;
		}

		.pattern-container {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
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
