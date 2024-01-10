<script lang="ts">
	import Button from '$lib/components/elements/Button.svelte';
	import { renderBlockText } from '$lib/modules/sanity';
	import type { About } from '$lib/modules/types';
	export let about: About;
</script>

<div id="about">
	<div class="about">
		<div class="half">
			{@html renderBlockText(about.content?.content ?? [])}
			<Button text="Projects" url="#projects" />
			<Button text="Writing & Resources" url="#writings" />
		</div>
		<div class="half">
			<Button text="Discord" url="https://github.com/moving-castles" target="_blank" />
			<Button text="Github" url="https://github.com/moving-castles" target="_blank" />
			<Button text="Twitter" url="https://github.com/moving-castles" target="_blank" />
			<Button text="Are.na" url="https://github.com/moving-castles" target="_blank" />
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
			border-right: 1px solid grey;
			padding-bottom: 100px;
		}
	}
</style>
