<script lang="ts">
	import type { About } from '$lib/modules/types';
	import Logo from '$lib/graphics/logo.svelte';

	export let about: About;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<header>
	<div class="topimg slow" data-rellax-speed="20" style="transform: translate3d(0px, -107px, 0px);">
		<div class="centered">
			<div class="item">
				<Logo />
			</div>
		</div>
	</div>

	<div class="core one">
		<img src="/images/core2.png" alt="Core" />
	</div>

	<div class="core two">
		<img src="/images/core3.png" alt="Core" />
	</div>
</header>

<style lang="scss">
	header {
		text-align: center;
		height: 100vh;
		width: 100vw;
		padding: 0;
		margin: 0;
		display: flex;
		user-select: none;
		position: relative;
		// cursor: pointer;
		background: radial-gradient(circle, red, orangered);

		.core {
			position: absolute;

			&.one {
				top: 20%;
				left: 10%;
				img {
					mix-blend-mode: multiply;
					height: 600px;
					animation: bobUpAndDown 2s infinite; /* 1s is the duration, adjust as needed */
				}
			}
			&.two {
				top: 10%;
				left: 60%;
				img {
					mix-blend-mode: multiply;
					height: 400px;
					animation: bobUpAndDown2 2s infinite; /* 1s is the duration, adjust as needed */
				}
			}
		}

		.topimg {
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

			.centered {
				width: 160%;
				height: 140%;
				position: relative;
				top: 10vh;
				left: -10vw;
			}
		}
	}

	@keyframes bobUpAndDown {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px); /* Adjust the value as needed for desired bobbing distance */
		}
	}

	@keyframes bobUpAndDown2 {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-25px); /* Adjust the value as needed for desired bobbing distance */
		}
	}
</style>
