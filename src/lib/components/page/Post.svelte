<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	import Dots from '$lib/components/elements/Dots.svelte';
	import { renderBlockText } from '$lib/modules/sanity/';
	import type { Post } from '$lib/types';
	export let post: Post;
</script>

<div class="container">
	<div class="header">
		<div class="half">
			{#if post.date}
				<div class="date">{post.date}</div>
			{/if}
			<h1>{post.title}</h1>
			<h2>{@html renderBlockText(post.byline?.content ?? [])}</h2>
		</div>
		<div class="half">
			<!-- <div>{post.date ?? ''}</div> -->
		</div>
	</div>

	<!-- <Dots /> -->
	<div class="column-container">
		<div class="text">
			<div class="content">
				<Content {post} />
			</div>
		</div>
	</div>
</div>
<!-- <Dots /> -->

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
				min-height: unset;
			}

			.half {
				width: 50%;
				padding: var(--default-padding);

				&:first-child {
					border-right: var(--default-border);
					@include screen-size('small') {
						border-right: unset;
						border-bottom: var(--default-border);
					}
				}

				@include screen-size('small') {
					width: 100%;
				}
			}

			h1,
			h2 {
				font-size: var(--font-size-normal);
				margin: 0;
			}

			h1 {
				background: var(--dark-grey);
				color: var(--black);
				padding: 1ch;
				position: relative;
				left: -1ch;
			}

			.date {
				margin-bottom: 1em;
				color: var(--dark-grey);
			}
		}

		.column-container {
			width: 100%;

			.text {
				padding: var(--double-padding);
				width: 90ch;
				border-right: var(--default-border);
				border-left: var(--default-border);
				margin-right: auto;
				margin-left: auto;
				line-height: var(--line-height-text);
				word-spacing: -0.1em;

				@include screen-size('small') {
					width: 100%;
					border-right: unset;
					border-left: unset;
					padding: var(--default-padding);
				}
			}
		}
	}
</style>
