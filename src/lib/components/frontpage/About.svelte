<script lang="ts">
	import { renderBlockText } from '$lib/modules/sanity';
	export let about: any;
</script>

<div id="about">
	<h3>About</h3>
	{#if about.content}
		<div>
			<p>{@html renderBlockText(about.content.content)}</p>
		</div>
	{/if}
</div>
