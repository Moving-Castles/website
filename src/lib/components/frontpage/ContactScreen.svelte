<script lang="ts">
	import { renderBlockText } from '$lib/modules/sanity/';
	import type { About } from '$lib/types';
	import { SOCIAL_MEDIA } from '$lib/constants';
	import Button from '$lib/components/elements/Button.svelte';
	import Discord from '$lib/components/graphics/icons/Discord.svelte';
	import Github from '$lib/components/graphics/icons/Github.svelte';
	import X from '$lib/components/graphics/icons/X.svelte';
	import Arena from '$lib/components/graphics/icons/Arena.svelte';

	export let about: About;

	const internalLinks = [
		{
			text: '↓ Projects',
			url: '#projects'
		},
		{
			text: '↓ Writing & Resources',
			url: '#writings'
		}
	];

	const externalLinks = [
		{
			text: 'Discord',
			url: SOCIAL_MEDIA['discord'],
			icon: Discord
		},
		{
			text: 'Github',
			url: SOCIAL_MEDIA['github'],
			icon: Github
		},
		{
			text: '@movingcastles_',
			url: SOCIAL_MEDIA['x'],
			icon: X
		},
		{
			text: 'Are.na',
			url: SOCIAL_MEDIA['arena'],
			icon: Arena
		}
	];
</script>

<div id='contact' class='screen'>
	<div class='inner'>
		<div class='address'>
			Moving Castles<br/>
			Leuschnerdamm 13<br/> 
			Berlin<br/>
		</div>
		<Button  text="info@movingcastles.world" url="@mailto:info@movingcastles.world" target="_blank" />
		{#each externalLinks as link}
			<Button icon={link.icon} text={link.text} url={link.url} target="_blank" />
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../styles/responsive.scss';

	.screen {
		display: block;
		height: 100dvh;
		width: 100dvw;
		display: flex;
		align-items: center;
		justify-content: center;

		@include screen-size('small') {
			flex-wrap: wrap;
			min-height: unset;
		}
	}

	.address {
		text-align: center;
		margin-bottom: 1em;
	}
</style>
