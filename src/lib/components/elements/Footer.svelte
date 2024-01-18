<script lang="ts">
	import SocialMediaRow from './SocialMediaRow.svelte';
</script>

<footer>
	<div class="menu">
		<a href="/" data-sveltekit-preload-data>Moving Castles</a>
		/
		<a href="/#about" data-sveltekit-preload-data>About & Contact</a>
		/
		<a href="/#projects" data-sveltekit-preload-data>Projects</a>
		/
		<a href="/#writings" data-sveltekit-preload-data>Writing & Resources</a>
	</div>

	<SocialMediaRow />
</footer>

<style lang="scss">
	footer {
		display: flex;
		padding: var(--default-padding);
		padding-right: calc(var(--default-padding) - 1ch);
		padding-bottom: var(--double-padding);
		justify-content: space-between;

		a {
			&:hover {
				background: var(--dark-grey);
				color: var(--black);
			}
		}
	}
</style>
