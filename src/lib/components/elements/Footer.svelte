<script lang="ts">
	import SocialMediaRow from './SocialMediaRow.svelte';
</script>

<footer>
	<div class="menu">"Tick tock goes the clock"</div>
	<div>Moving Castles GmbH 2024</div>
</footer>

<style lang="scss">
	@import '../../styles/responsive.scss';

	footer {
		display: flex;
		padding: var(--default-padding);
		padding-right: var(--default-padding);
		padding-bottom: var(--double-padding);
		justify-content: space-between;
		user-select: none;
		opacity: 0.2;

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
