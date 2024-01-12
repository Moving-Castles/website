<script lang="ts">
	import type { About } from '$lib/modules/types';
	import Logo from '$lib/graphics/logo.svelte';

	export let about: About;

	const scrollDown = () => {
		const targetEl = document.getElementById('tagline');
		if (!targetEl) return;
		targetEl.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<header on:click={scrollDown}>
	<div class="topimg slow" data-rellax-speed="20" style="transform: translate3d(0px, -107px, 0px);">
		<div class="centered">
			<div class="item">
				<Logo />
			</div>
		</div>
	</div>

	<div class="column left">
		<img src="/core.png" alt="Core" />
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
		cursor: pointer;

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
				width: 160vw;
				height: 140vh;
				position: relative;
				top: 17vh;
				left: -10vw;
			}
		}

		.column {
			display: block;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: var(--foreground-color);

			&.left {
				background: var(--background-color);
				// background: var(--foreground-color);
				background: var(--accent-color);
				// background: radial-gradient(circle, red, rgb(254, 86, 26));
				background: radial-gradient(circle, red, orangered);

				img {
					mix-blend-mode: multiply;
					height: 70%;
					animation: bobUpAndDown 2s infinite; /* 1s is the duration, adjust as needed */
				}
			}

			&.right {
				// background: var(--accent-color);
				// color: var(--background-color);

				.tag-line {
					// font-size: 4vw;
					line-height: 1.1em;
					word-spacing: -0.2em;
					width: 20ch;
					max-width: 90%;
				}
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
</style>
