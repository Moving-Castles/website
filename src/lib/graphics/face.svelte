<script lang="ts">
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let condition = true;
	let decoEl: SVGSVGElement;

	onMount(() => {
		new simpleParallax(decoEl, {
			delay: 0,
			orientation: 'up',
			scale: 1.4,
			overflow: true
		});
	});
</script>

<svg
	bind:this={decoEl}
	id="Layer_2"
	data-name="Layer 2"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 610.77 536.29"
	width="110%"
	height="110%"
>
	<defs>
		<style>
			.cls-1 {
				fill: none;
				stroke: #00ff00;
				stroke-miterlimit: 10;
				stroke-width: 20px;
			}
		</style>
	</defs>
	<g id="Layer_1-2" data-name="Layer 1">
		<g>
			<path
				class="cls-1"
				d="M422.21,114.06c-69.56,37.55-92.48,25.44-105.22-47.28-36.65,58.59-63.54,56.85-113.81-.64,11.76,70.78-1.11,78.97-58.66,33.23,16.75,76.49-9.1,106.07-88.67,130.57,72.33,33.35,78.03,55.74,17.42,97.45,84.09,13.73,109.17,45.97,112.12,123.26,64.02-48.49,100.33-50.61,155.03,18.73-4.56-68.19,11.14-67.33,67.64-6.37-20.36-74.86-6.6-96.59,67.98-77.46-54.5-63.98-47.04-88.85,30.58-110.63-73.9-16.82-74.22-30.97-9.66-57.22-80.1,3.29-96.02-3.46-42.11-49.24"
			/>
			<path
				class="cls-1"
				d="M220.84,184.77c-11.32,13.92-18.45,22.55-32,38.68,5-11.17,6.19-14.45,2.3-13.28,7.49-8.71,10.18-13.27,11.55-20.95,3.23-.09,5.13-3.32,8.58-14.53-1.35,7.66-1.07,7.3,1.14-.82-1.72,8.35-1.62,8.65.57.98.57,17.19,2.61,26.77,9.12,42.88-4.94-4.81-4.45-2.88,2.86,5.45"
			/>
			<path
				class="cls-1"
				d="M290.69,197.88c17.9,7.04,28.05,11.34,45.11,19.08-5.95-4.75-5.3-4.62,2.5-.1-6.96-5.17-6.86-5.7.84-1.97-6.57-11.63-5.97-19.1,2.69-33.57-8.49,5.29-8.5,3.52-1.17-7.43-8.93,7.96-10.78,6.88-6.33-2.91-7.12,10.87-7.78,11.98-3.5,3.89-10.52,19.46-15.56,30.13-22.6,47.91,1.98-5.09,1.28-3.31-3.9,7.47,2.78-7.88.95-6.8-7.36,3.52"
			/>
			<path
				class="cls-1"
				d="M161.77,315.54c54.92,11.79,72.17,4.59,77.3-7.2,29.25,6.65,47.49,9.4,74.83,33.67-8.69,4.46-4.54,12.77,20.01,22.82-16.43-9.33-13.44-12.24,13.51-8.23-14.88-15.95-5.7-25.02,41.3-40.85-39.57,5.94-41.32,5.13-7.86-3.64"
			/>
		</g>
	</g>
</svg>
