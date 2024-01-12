<script lang="ts">
	import { onMount } from 'svelte';
	import { generateDotPattern, appendDotPattern } from '$lib/modules/graphics';

	let patternContainer: HTMLDivElement;

	const drawDotPattern = (el: HTMLDivElement) => {
		let height = el.clientHeight;
		let width = el.clientWidth;
		appendDotPattern(patternContainer, generateDotPattern(4, 5, 'grey', width, height, -2));
	};

	onMount(() => {
		drawDotPattern(patternContainer);
	});
</script>

<window
	on:resize={() => {
		drawDotPattern(patternContainer);
	}}
/>

<div class="dots">
	<div class="pattern-container" bind:this={patternContainer} />
</div>

<style lang="scss">
	.dots {
		width: 100%;
		height: 160px;
		pointer-events: none;
		overflow: hidden;
		// background: orangered;

		.pattern-container {
			width: 100%;
			height: 100%;
			position: relative;
			// padding-top: 2px;
			// padding: 10px;
		}
	}
</style>
