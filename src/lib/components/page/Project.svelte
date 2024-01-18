<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	import Dots from '$lib/components/elements/Dots.svelte';
	import Media from '$lib/components/page/Media.svelte';
	import Links from '$lib/components/page//Links.svelte';
	import Button from '$lib/components/elements/Button.svelte';
	import { renderBlockText } from '$lib/modules/sanity';
	import type { Project } from '$lib/modules/types';
	import Arena from '$lib/graphics/icons/Arena.svelte';
	export let post: Project;
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
			<h2>{post.shortDescription ?? ''}</h2>
		</div>
		<div class="half">
			<div>
				{#if post.githubRepo}
					<a href={post.githubRepo} target="_blank">→ Github</a>
				{/if}
				<Links {post} />
			</div>
		</div>
	</div>

	<Dots />
	<div class="column-container">
		<div class="media">
			<Media {post} />
		</div>
		<div class="text">
			<div class="content">
				<Content {post} />
			</div>
			{#if post.arenaChannel}
				<div class="arena">
					<Button icon={Arena} text="Research material" url={post.arenaChannel} />
				</div>
			{/if}
		</div>
	</div>
</div>
<Dots />

<style lang="scss">
	@import '../../styles/responsive.scss';

	.container {
		display: block;
		background: transparent;
		width: 100%;

		.header {
			display: flex;
			min-height: 200px;

			@include screen-size('small') {
				flex-wrap: wrap;
			}

			.half {
				width: 50%;
				padding: var(--default-padding);

				&:first-child {
					border-right: 1px solid var(--dark-grey);
				}

				@include screen-size('small') {
					width: 100%;
					border-right: none;
					border-bottom: 1px solid var(--dark-grey);
				}
			}

			h1,
			h2 {
				font-size: var(--font-size-normal);
				margin: 0;
			}

			h2 {
				margin-top: 1em;
			}

			h1 {
				background: var(--dark-grey);
				color: var(--black);
				padding: 1ch;
				// position: relative;
				// left: -1ch;
			}
		}

		.column-container {
			// justify-content: center;
			display: flex;
			width: 100%;

			@include screen-size('small') {
				flex-wrap: wrap;
				flex-direction: column-reverse;
			}

			.media {
				width: 50%;
				min-height: 100vh;
				border-right: 1px solid var(--dark-grey);

				@include screen-size('small') {
					width: 100%;
					border-right: none;
					border-bottom: 1px solid var(--dark-grey);
					min-height: unset;
					padding-bottom: var(--double-padding);
				}
			}

			.text {
				padding: var(--default-padding);
				width: 50%;
				word-spacing: -0.1em;
				// font-size: 20px;
				// font-size: 1.5em;
				// font-family: 'Times New Roman', Times, serif;

				@include screen-size('small') {
					width: 100%;
					border-right: none;
				}

				.content {
					max-width: 70ch;
				}
			}
		}
	}
</style>
