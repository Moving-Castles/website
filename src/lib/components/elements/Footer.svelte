<script lang="ts">
	import SocialMediaRow from './SocialMediaRow.svelte';
</script>

<footer>
	<div class="menu">
		<a href="/" data-sveltekit-preload-data>Moving Castles</a>
		<span class="hide-on-mobile">/</span>
		<a href="/#about" class="hide-on-mobile" data-sveltekit-preload-data>About & Contact</a>
		<span class="hide-on-mobile">/</span>
		<a href="/#projects" class="hide-on-mobile" data-sveltekit-preload-data>Projects</a>
		<span class="hide-on-mobile">/</span>
		<a href="/#writings" class="hide-on-mobile" data-sveltekit-preload-data>Writing & Resources</a>
	</div>

	<SocialMediaRow />
</footer>

<style lang="scss">
	@import '../../styles/responsive.scss';

	footer {
		display: flex;
		padding: var(--default-padding);
		padding-right: calc(var(--default-padding) - 1ch);
		padding-bottom: var(--double-padding);
		justify-content: space-between;
		user-select: none;

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
</style>
