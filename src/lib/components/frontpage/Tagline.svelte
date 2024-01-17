<script lang="ts">
	import type { About } from '$lib/modules/types';
	export let about: About;
</script>

<div class="tagline" id="tagline">
	<div class="inner">
		{about.tagline}
	</div>
</div>

<style lang="scss">
	.tagline {
		width: 100%;
		padding-top: 80px;
		padding-bottom: 80px;
		border-bottom: 1px solid var(--dark-grey);
		font-size: 48px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;

		.inner {
			max-width: 40ch;
			line-height: 1em;
			// font-family: 'LincolnMITRE-LM5x7';
		}
	}
</style>
