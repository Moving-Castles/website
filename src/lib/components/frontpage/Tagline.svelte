<script lang="ts">
	import type { About } from '$lib/modules/types';
	export let about: About;
</script>

<div class="tagline" id="about">
	<div class="inner">
		{about.tagline}
	</div>
</div>

<style lang="scss">
	@import '../../styles/responsive.scss';

	.tagline {
		width: 100%;
		padding-top: var(--double-padding);
		padding-bottom: var(--double-padding);
		padding-left: var(--default-padding);
		padding-right: var(--default-padding);
		border-bottom: var(--default-border);
		font-size: var(--font-size-large);
		margin: 0 auto;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;

		@include screen-size('small') {
			font-size: var(--font-size-mobile-large);
		}

		.inner {
			max-width: 40ch;
			line-height: var(--line-height-compressed);
		}
	}
</style>
