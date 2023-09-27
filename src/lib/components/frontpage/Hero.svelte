<script lang="ts">
	import { typewriter } from '$lib/modules/transitions';
	export let about: any;
</script>

<header>
	<a href="#projects" class="column left">
		<img src="/core.png" alt="Core" />
	</a>
	<a href="#projects" class="column right">
		{#if about.tagline}
			<div class="tag-line" in:typewriter={{ delay: 0, speed: 100 }}>
				{about.tagline}
			</div>
		{/if}
	</a>
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

		.column {
			display: block;
			width: 50%;
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
					// mix-blend-mode: screen;
					width: 60%;
					height: auto;
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
					font-weight: bold;
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
