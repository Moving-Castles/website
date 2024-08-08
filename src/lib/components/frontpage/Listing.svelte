<script lang="ts">
	import AuthorList from '../elements/AuthorList.svelte';
	import type { Post, Project, Column } from '$lib/types';
	export let posts: Post[] | Project[] = [];
	export let columns: Column[];
	export let id: string;
	export let type: string;
	export let title: string;
</script>

<div {id} class="listing-container">
	<div class="introduction">
		<div class="center">{title}</div>
	</div>
	<div class="listing">
		<div class="listing-header">
			{#each columns as col}
				<div
					class="header-cell {col.name} {col.hideOnMobile ? 'hide-on-mobile' : ''}"
					style={`width: ${col.width}`}
				>
					{col.title}
				</div>
			{/each}
		</div>
		{#each posts as post}
			<a href={`${type}/${post.slug?.current ?? ''}`} class="listing-row">
				{#each columns as col}
					<div
						class="cell {col.name} {col.hideOnMobile ? 'hide-on-mobile' : ''}"
						style={`width: ${col.width}`}
					>
						{post[col.key] === true
							? 'Yes'
							: post[col.key] === false
								? 'No'
								: (post[col.key] ?? '')}
					</div>
				{/each}
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../styles/responsive.scss';

	.listing-container {
		width: 100%;
		user-select: none;

		.introduction {
			border-bottom: var(--default-border);
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: var(--double-padding);
			padding-bottom: var(--double-padding);

			.center {
				font-size: var(--font-size-large);
				line-height: var(--line-height-compressed);
				text-align: center;
				// font-weight: 200;

				@include screen-size('small') {
					font-size: var(--font-size-mobile-large);
				}
			}
		}

		.listing {
			width: 100%;

			.listing-header {
				width: 100%;
				display: flex;
				border-bottom: var(--default-border);
				padding-top: var(--default-padding);
				padding-bottom: var(--default-padding);
				color: var(--dark-grey);
			}

			.listing-row {
				width: 100%;
				display: flex;
				padding-top: var(--default-padding);
				padding-bottom: var(--default-padding);
				border-bottom: var(--default-border);

				&:last-child {
					border-bottom: none;
				}

				&:hover {
					background: var(--dark-grey);
					cursor: pointer;
				}
			}

			.hide-on-mobile {
				@include screen-size('small') {
					display: none;
				}
			}

			.header-cell:first-child {
				&:first-child {
					padding-left: var(--default-padding);
				}
			}

			.cell:first-child {
				&:first-child {
					padding-left: var(--default-padding);
				}
			}

			.header-cell,
			.cell {
				@include screen-size('small') {
					width: 50% !important;
				}
			}
		}
	}
</style>
