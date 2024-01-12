<script lang="ts">
	import AuthorList from './AuthorList.svelte';
	import type { Post } from '$lib/modules/types';
	export let posts: Post[] = [];
</script>

<div id="writings" class="writings">
	<div class="introduction">
		<div class="center">Writing & Resources</div>
	</div>
	<div class="listing">
		<div class="listing-header">
			<div class="header-cell title">Title</div>
			<div class="header-cell authors">Author(s)</div>
			<div class="header-cell date">Date</div>
			<div class="header-cell date">Type</div>
		</div>
		{#each posts as post}
			<a href="/post/{post.slug?.current ?? ''}" class="listing-row">
				<div class="cell title">{post.title}</div>
				<div class="cell authors"><AuthorList authors={post.authors} /></div>
				<div class="cell date">{post.date ?? ''}</div>
				<div class="cell type">{post.type ?? ''}</div>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.writings {
		width: 100%;

		.introduction {
			height: 200px;
			border-bottom: 1px solid grey;
			display: flex;
			justify-content: center;
			align-items: center;

			.center {
				padding: 30px;
				font-size: 48px;
			}
		}

		.listing {
			width: 100%;

			.listing-header {
				width: 100%;
				display: flex;
				border-bottom: 1px solid grey;
				line-height: 1em;
				padding-top: 30px;
				padding-bottom: 30px;
				// font-size: 22px !important;
				color: grey;
			}

			.listing-row {
				width: 100%;
				display: flex;
				// font-size: 22px !important;
				line-height: 1em;
				padding-top: 30px;
				padding-bottom: 30px;
				border-bottom: 1px solid grey;

				&:last-child {
					border-bottom: none;
				}

				&:hover {
					background: rgb(62, 62, 62);
					cursor: pointer;
				}
			}

			.header-cell,
			.cell {
				&:first-child {
					padding-left: 30px;
				}
			}

			.title {
				width: 55%;
			}

			.authors {
				width: 15%;
			}

			.date {
				width: 15%;
			}

			.type {
				width: 15%;
			}
		}
	}
</style>
