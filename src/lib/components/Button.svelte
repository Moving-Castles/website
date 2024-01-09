<script lang="ts">
	export let text: string;
	export let url: string;
	export let target: string = '';
</script>

<div class="button-container">
	<a href={url} {target} class="button">
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
	}

	.button {
		display: inline-block;
		padding: 1rem 1rem;
		width: 100%;
		text-align: center;
		border-radius: 0;
		border: 1px solid grey;
		color: var(--color-white);
		text-decoration: none;
		transition: background-color 0.2s ease-in-out;
	}

	.button:hover {
		background-color: grey;
	}
</style>
