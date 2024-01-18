<script lang="ts">
	import { page } from '$app/stores';
	import SocialMediaRow from './SocialMediaRow.svelte';

	const isProject = $page?.route?.id == '/project/[slug]';
	const isPost = $page?.route?.id == '/post/[slug]';
</script>

<nav>
	<div class="navigation">
		<a href="/" data-sveltekit-preload-data>Moving Castles</a>
		<span class="hide-on-mobile">/</span>
		{#if isProject}
			<a href="/#projects" class="hide-on-mobile" data-sveltekit-preload-data>Projects</a>
		{:else if isPost}
			<a href="/#writings" class="hide-on-mobile" data-sveltekit-preload-data>
				Writings & Resources
			</a>
		{/if}
	</div>
	<SocialMediaRow />
</nav>

<style lang="scss">
	@import '../../styles/responsive.scss';

	nav {
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		padding-left: var(--default-padding);
		padding-right: calc(var(--default-padding) - 1ch);
		border-bottom: var(--default-border);
		justify-content: space-between;
		user-select: none;

		@include screen-size('small') {
			height: 80px;
		}

		.navigation {
			a {
				&:hover {
					background: var(--dark-grey);
					color: var(--black);
				}
			}

			.hide-on-mobile {
				@include screen-size('small') {
					display: none;
				}
			}
		}
	}
</style>
