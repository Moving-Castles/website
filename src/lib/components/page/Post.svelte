<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	import FeaturedMedia from '$lib/components/page/FeaturedMedia.svelte';
	import Links from '$lib/components/page/Links.svelte';
	import Media from '$lib/components/page/Media.svelte';
	import { renderBlockText } from '$lib/modules/sanity';
	import type { Post } from '$lib/modules/types';
	export let post: Post;
</script>

<div class="container">
	<div class="column">
		<div>{post.publicationDate ?? ''}</div>
		<div>{post.title}</div>
		<div>{@html renderBlockText(post.byline?.content ?? [])}</div>
		<div class="content">
			<Content {post} />
		</div>
		<div class="links">
			<Links {post} />
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: block;
		display: flex;
		background: transparent;
		padding-top: 100px;
		justify-content: center;
		padding-bottom: 200px;

		.column {
			width: 80ch;
		}
	}
</style>
