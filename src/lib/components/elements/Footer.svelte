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
		padding: 30px;
		padding-right: calc(30px - 1ch);
		padding-bottom: 60px;
		justify-content: space-between;

		a {
			// margin-right: 10px;
			&:hover {
				background: var(--dark-grey);
				color: var(--black);
			}
		}
	}
</style>
