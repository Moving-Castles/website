<script lang="ts">
	import type { Project } from "$lib/types";
	import Button from "$lib/components/elements/Button.svelte";

	export let projects: Project[] = [];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id='projects' role='presentation' class='screen'>
	<div class='inner'>
		<div class='title'>Projects</div>
		{#each projects as project}
			<Button text={project.title} url={`/project/${project.slug?.current ?? ""}`} />
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../styles/responsive.scss';

	.screen {
		text-align: center;
		height: 100dvh;
		width: 100dvw;
		padding: 0;
		margin: 0;
		display: flex;
        justify-content: center;
        align-items: center;
		user-select: none;
		cursor: pointer;

		// @include screen-size('small') {
		// 	height: calc(100dvh - 120px);
		// }

        img {
            width: 200px;
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

	.title {
		margin-bottom: 1em;
	}
</style>
