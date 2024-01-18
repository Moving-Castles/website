<script lang="ts">
	import { page } from '$app/stores';
	import SocialMediaRow from './SocialMediaRow.svelte';

	const isProject = $page?.route?.id == '/project/[slug]';
	const isPost = $page?.route?.id == '/post/[slug]';
</script>

<nav>
	<div class="navigation">
		<a href="/" data-sveltekit-preload-data>Moving Castles</a>
		/
		{#if isProject}
			<a href="/#projects" data-sveltekit-preload-data>Projects</a>
		{:else if isPost}
			<a href="/#writings" data-sveltekit-preload-data>Writings & Resources</a>
		{/if}
	</div>
	<SocialMediaRow />
</nav>

<style lang="scss">
	nav {
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
		padding-left: var(--default-padding);
		padding-right: calc(var(--default-padding) - 1ch);
		border-bottom: 1px solid var(--dark-grey);
		justify-content: space-between;

		.navigation {
			a {
				&:hover {
					background: var(--dark-grey);
					color: var(--black);
				}
			}
		}
	}
</style>
