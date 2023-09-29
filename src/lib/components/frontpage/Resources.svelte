<script lang="ts">
	import SectionHead from '$lib/components/frontpage/SectionHead.svelte';
	import Card from '$lib/components/frontpage/Card.svelte';
	export let resources: any[] = [];
</script>

<div id="writings">
	<SectionHead>Resources</SectionHead>
	{#each resources as post}
		<Card {post} category="resource" />
	{/each}
</div>
