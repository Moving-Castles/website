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

<div>
	<div class="about">
		<div class="half">
			{@html renderBlockText(about.content?.content ?? [])}
			{#each internalLinks as link}
				<Button text={link.text} url={link.url} anchor />
			{/each}
		</div>
		<div class="half">
			{#each externalLinks as link}
				<Button icon={link.icon} text={link.text} url={link.url} target="_blank" />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/responsive.scss';

	.about {
		display: block;
		min-height: 50vh;
		display: flex;

		@include screen-size('small') {
			flex-wrap: wrap;
			min-height: unset;
		}

		.half {
			width: 50%;
			padding: var(--default-padding);
			padding-bottom: var(--double-padding);

			&:first-child {
				border-right: var(--default-border);
				@include screen-size('small') {
					border-bottom: var(--default-border);
					border-right: unset;
				}
			}

			@include screen-size('small') {
				width: 100%;
				border-right: none;
			}
		}
	}
</style>
