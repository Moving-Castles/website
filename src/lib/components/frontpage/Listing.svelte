<script lang="ts">
	import AuthorList from '../elements/AuthorList.svelte';
	import type { Post, Project, Column } from '$lib/modules/types';
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
						{post[col.key] === true ? 'Yes' : post[col.key] === false ? 'No' : post[col.key] ?? ''}
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

		.introduction {
			height: 200px;
			border-bottom: 1px solid var(--dark-grey);
			display: flex;
			justify-content: center;
			align-items: center;

			.center {
				padding: 30px;
				font-size: 48px;
				line-height: 1em;
			}
		}

		.listing {
			width: 100%;

			.listing-header {
				width: 100%;
				display: flex;
				border-bottom: 1px solid var(--dark-grey);
				line-height: 1em;
				padding-top: 30px;
				padding-bottom: 30px;
				color: var(--dark-grey);
			}

			.listing-row {
				width: 100%;
				display: flex;
				line-height: 1em;
				padding-top: 30px;
				padding-bottom: 30px;
				border-bottom: 1px solid var(--dark-grey);

				&:last-child {
					border-bottom: none;
				}

				&:hover {
					background: var(--dark-grey);
					cursor: pointer;
				}
			}

			.hide-on-mobile {
				@include screen-size('phone') {
					display: none;
				}
			}

			.header-cell:first-child {
				&:first-child {
					padding-left: 30px;
				}
			}

			.cell:first-child {
				&:first-child {
					padding-left: 30px;
				}
			}

			.header-cell,
			.cell {
				@include screen-size('phone') {
					width: 50% !important;
				}
			}
		}
	}
</style>
