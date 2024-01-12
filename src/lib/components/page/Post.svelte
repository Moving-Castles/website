<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	import FeaturedMedia from '$lib/components/page/FeaturedMedia.svelte';
	import Links from '$lib/components/page/Links.svelte';
	import Media from '$lib/components/page/Media.svelte';
	import Dots from '$lib/components/elements/Dots.svelte';
	import { renderBlockText } from '$lib/modules/sanity';
	import type { Post } from '$lib/modules/types';
	export let post: Post;
</script>

<div class="container">
	<div class="header">
		<div>{post.date ?? ''}</div>
		<h1>{post.title}</h1>
		<h2>{@html renderBlockText(post.byline?.content ?? [])}</h2>
	</div>

	<Dots />
	<div class="column">
		<div class="inner">
			<div class="content">
				<Content {post} />
			</div>
			<div class="links">
				<Links {post} />
			</div>
		</div>
	</div>
</div>
<Dots />

<style lang="scss">
	.container {
		display: block;
		background: transparent;
		padding-bottom: 200px;
		width: 100%;

		.header {
			line-height: 1em;
			padding: 30px;

			h1,
			h2 {
				font-size: 48px;
			}
		}

		.column {
			justify-content: center;
			display: flex;
			width: 100%;
			.inner {
				width: 80ch;
			}
		}
	}
</style>
