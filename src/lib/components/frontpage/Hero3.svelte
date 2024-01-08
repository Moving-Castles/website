<script lang="ts">
	import type { About } from '$lib/modules/types';

	export let about: About;
	const scrollToProjects = () => {
		const projectsEl = document.getElementById('projects');
		if (!projectsEl) return;
		projectsEl.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<header on:click={scrollToProjects}>
	<div class="column left">
		<img src="/core.png" alt="Core" />
		<div class="tag-line">
			{about.tagline}
		</div>
	</div>
	<!-- <div class="column right">
		{#if about.tagline}
	
		{/if}
	</div> -->
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

		.column {
			display: block;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: var(--foreground-color);
			position: relative;

			&.left {
				background: var(--background-color);
				// background: var(--foreground-color);
				// background: var(--accent-color);
				// background: radial-gradient(circle, red, rgb(254, 86, 26));
				// background: radial-gradient(circle, red, orangered);

				img {
					// mix-blend-mode: screen;
					height: 60%;
					animation: bobUpAndDown 2s infinite; /* 1s is the duration, adjust as needed */
				}

				.tag-line {
					text-align: left;
					position: absolute;
					top: 20px;
					left: 20px;
					// font-size: 4vw;
					line-height: 1.1em;
					word-spacing: -0.2em;
					width: 20ch;
					max-width: 90%;
				}
			}

			&.right {
				// background: var(--accent-color);
				// color: var(--background-color);
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
