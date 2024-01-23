<script lang="ts">
	import X from '$lib/graphics/icons/X.svelte';
	import Github from '$lib/graphics/icons/Github.svelte';
	import Discord from '$lib/graphics/icons/Discord.svelte';
	import Arena from '$lib/graphics/icons/Arena.svelte';
	import { SOCIAL_MEDIA } from '$lib/modules/constants';
</script>

<div class="icons">
	<a href={SOCIAL_MEDIA['discord']} target="_blank"><Discord spaced /></a>
	<a href={SOCIAL_MEDIA['github']} target="_blank"><Github spaced /></a>
	<a href={SOCIAL_MEDIA['x']} target="_blank"><X spaced /></a>
	<a href={SOCIAL_MEDIA['arena']} target="_blank"><Arena spaced /></a>
</div>

<style lang="scss">
	.icons {
		display: flex;
		align-items: center;
		color: var(--grey);
	}
</style>
