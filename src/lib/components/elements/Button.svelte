<script lang="ts">
	export let text: string;
	export let icon: ConstructorOfATypedSvelteComponent | undefined = undefined;
	export let url: string;
	export let target: string = '';
	export let anchor: boolean = false;

	const handleClick = (e: Event) => {
		if (!anchor) return;

		e.preventDefault();
		const el = document.querySelector(url);
		el?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<div class="button-container">
	<a href={url} {target} class="button" on:click={handleClick}>
		{#if icon}
			<svelte:component this={icon} />
		{/if}
		{text}
	</a>
</div>

<style lang="scss">
	.button-container {
		display: flex;
		justify-content: center;
		width: 100%;
		padding-top: 1em;
		padding-bottom: 1em;
		user-select: none;

		.button {
			display: inline-block;
			padding: 1rem 1rem;
			width: 100%;
			text-align: center;
			border-radius: 0;
			border: var(--default-border);
			color: var(--color-white);
			text-decoration: none;
			transition: background-color 0.2s ease-in-out;
			display: flex;
			justify-content: center;

			&:hover {
				background-color: var(--dark-grey);
			}
		}
	}
</style>
