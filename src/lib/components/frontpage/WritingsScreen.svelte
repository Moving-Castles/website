<script lang="ts">
	import type { Post, Project } from "$lib/types";
	import Button from "$lib/components/elements/Button.svelte";

	export let posts: Post[] = [];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id='writings' role='presentation' class='screen'>
	<div class='inner'>
		<div class='title'>Writings</div>
		{#each posts as post}
			<Button text={post.title} url={`/post/${post.slug?.current ?? ""}`} />
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

	.title {
		margin-bottom: 1em;
	}
</style>
