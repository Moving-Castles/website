<script lang="ts">
	import type { Project } from '$lib/modules/types';
	export let posts: Project[] = [];
</script>

<div id="projects" class="projects">
	<div class="introduction">
		<div class="center">Projects</div>
	</div>
	<div class="listing">
		<div class="listing-header">
			<div class="header-cell title">Title</div>
			<div class="header-cell date">Description</div>
		</div>
		{#each posts as post}
			<a href="/project/{post.slug?.current ?? ''}" class="listing-row">
				<div class="cell title">{post.title}</div>
				<div class="cell description">{post.shortDescription ?? ''}</div>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.projects {
		width: 100%;
		border-top: 1px solid grey;

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
				width: 40%;
			}

			.description {
				width: 60%;
			}
		}
	}
</style>
