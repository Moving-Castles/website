<script lang="ts">
	import Button from '$lib/components/elements/Button.svelte';
	import { renderBlockText } from '$lib/modules/sanity';
	import type { About } from '$lib/modules/types';
	export let about: About;

	const internalLinks = [
		{
			text: '→ Projects',
			url: '#projects'
		},
		{
			text: '→ Writing & Resources',
			url: '#writings'
		}
	];

	const externalLinks = [
		{
			text: '→ Discord',
			url: 'https://discord.gg/USH976PyXJ'
		},
		{
			text: '→ Github',
			url: 'https://github.com/moving-castles'
		},
		{
			text: '→ Twitter',
			url: 'https://twitter.com/movingcastles_'
		},
		{
			text: '→ Are.na',
			url: 'https://www.are.na/moving-castles'
		}
	];
</script>

<div id="about">
	<div class="about">
		<div class="half">
			{@html renderBlockText(about.content?.content ?? [])}
			{#each internalLinks as link}
				<Button text={link.text} url={link.url} anchor />
			{/each}
		</div>
		<div class="half">
			{#each externalLinks as link}
				<Button text={link.text} url={link.url} target="_blank" />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.about {
		display: block;
		min-height: 50vh;
		display: flex;

		.half {
			width: 50%;
			padding: 30px;
			border-right: 1px solid var(--dark-grey);
			padding-bottom: 100px;
		}
	}
</style>
