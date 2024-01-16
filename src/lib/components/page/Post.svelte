<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	import FeaturedMedia from '$lib/components/page/FeaturedMedia.svelte';
	import Links from '$lib/components/page/Links.svelte';
	import Media from '$lib/components/page/Media.svelte';
	import Dots from '$lib/components/elements/Dots.svelte';
	import Face from '$lib/graphics/face.svelte';
	import { renderBlockText } from '$lib/modules/sanity';
	import type { Post } from '$lib/modules/types';
	export let post: Post;
</script>

<div class="container">
	<!-- <div class="topimg slow" data-rellax-speed="20" style="transform: translate3d(0px, -107px, 0px);">
		<div class="centered">
			<div class="item">
				<Face />
			</div>
		</div>
	</div> -->

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
	<div class="column-container">
		<div class="text">
			<div class="content">
				<Content {post} />
			</div>
		</div>
	</div>
</div>
<Dots />

<style lang="scss">
	.container {
		display: block;
		background: transparent;
		width: 100%;

		.topimg {
			position: absolute;
			width: 1000px;
			height: 1000px;
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

		.header {
			line-height: 1em;
			display: flex;
			min-height: 200px;

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

			h1 {
				background: grey;
				color: var(--black);
				padding: 1ch;
			}
		}

		.column-container {
			// justify-content: center;
			// display: flex;
			width: 100%;

			.text {
				padding: 50px;
				width: 90ch;
				border-right: 1px solid grey;
				border-left: 1px solid grey;
				margin-right: auto;
				margin-left: auto;
				line-height: 1.8em;
				word-spacing: -0.1em;
				// font-size: 20px;
				// font-size: 1.5em;
				// font-family: 'Times New Roman', Times, serif;

				.content {
					// max-width: 70ch;
				}
			}
		}
	}
</style>
