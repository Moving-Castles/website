<script lang="ts">
	import Twitter from '$lib/graphics/icons/Twitter.svelte';
	import Github from '$lib/graphics/icons/Github.svelte';
	import Discord from '$lib/graphics/icons/Discord.svelte';
	import Arena from '$lib/graphics/icons/Arena.svelte';
	import { SOCIAL_MEDIA } from '$lib/modules/constants';
</script>

<div class="icons">
	<a href={SOCIAL_MEDIA['discord']} target="_blank"><Discord /></a>
	<a href={SOCIAL_MEDIA['github']} target="_blank"><Github /></a>
	<a href={SOCIAL_MEDIA['twitter']} target="_blank"><Twitter /></a>
	<a href={SOCIAL_MEDIA['arena']} target="_blank"><Arena /></a>
</div>

<style lang="scss">
	.icons {
		display: flex;
		align-items: center;
		color: var(--grey);
	}
</style>
