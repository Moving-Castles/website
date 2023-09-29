<script lang="ts">
	import SectionHead from '$lib/components/frontpage/SectionHead.svelte';
	import { renderBlockText } from '$lib/modules/sanity';
	export let about: any;
</script>

<div id="about">
	<SectionHead>About</SectionHead>
	{#if about.content}
		<div class="about">
			<div class="column left" />
			<div class="column right">
				{@html renderBlockText(about.content.content)}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.about {
		display: block;
		height: 50vh;
		display: flex;

		.column {
			width: 50%;

			&.left {
				// background: radial-gradient(circle, red, orangered);
				// background: var(--background-accent);
			}

			&.right {
				display: flex;
				// justify-content: center;
				// align-items: center;
				padding: 20px;
			}
		}
	}
</style>
