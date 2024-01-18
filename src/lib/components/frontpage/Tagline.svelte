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
		border-bottom: 1px solid var(--dark-grey);
		font-size: 48px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;

		@include screen-size('small') {
			font-size: 32px;
		}

		.inner {
			max-width: 40ch;
			line-height: var(--line-height-compressed);
		}
	}
</style>
