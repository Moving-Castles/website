<script lang="ts">
	import Overlay from '../elements/Overlay.svelte';

	const scrollDown = () => {
		const targetEl = document.getElementById('about');
		if (!targetEl) return;
		targetEl.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<header on:click={scrollDown}>
	<Overlay />

	<div class="column left">
		<img src="/images/core.png" alt="Core" />
	</div>
</header>

<style lang="scss">
	@import '../../styles/responsive.scss';

	header {
		text-align: center;
		height: 100dvh;
		width: 100dvw;
		padding: 0;
		margin: 0;
		display: flex;
		user-select: none;
		cursor: pointer;

		// @include screen-size('small') {
		// 	height: calc(100dvh - 120px);
		// }

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
				background: var(--accent-color);
				background: radial-gradient(circle, red, orangered);

				img {
					mix-blend-mode: multiply;
					height: 70%;
					animation: bobUpAndDown 2s infinite; /* 1s is the duration, adjust as needed */

					@include screen-size('small') {
						widgth: 100%;
						height: unset;
						max-height: 90dvh;
					}
				}
			}

			&.right {
				.tag-line {
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
