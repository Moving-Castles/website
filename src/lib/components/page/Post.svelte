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
		<div class="half">
			<h1>{post.title}</h1>
			<h2>{@html renderBlockText(post.byline?.content ?? [])}</h2>
		</div>
		<div class="half">
			<div>{post.date ?? ''}</div>
		</div>
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
			display: flex;
			min-height: 300px;

			.half {
				width: 50%;
				padding: 30px;
				border-right: 1px solid grey;
			}

			h1,
			h2 {
				font-size: var(--font-size-normal);
				margin: 0;
			}
		}

		.column {
			// justify-content: center;
			// display: flex;
			width: 100%;

			.inner {
				padding: 30px;
				width: 50%;
				line-height: 1.6em;
				// font-family: 'Times New Roman', Times, serif;
			}
		}
	}
</style>
