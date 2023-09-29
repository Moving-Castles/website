<script lang="ts">
	import SectionHead from '$lib/components/frontpage/SectionHead.svelte';
	import Card from '$lib/components/frontpage/Card.svelte';
	export let writings: any[] = [];
</script>

<div id="writings">
	<SectionHead>Writings</SectionHead>
	{#each writings as post}
		<Card {post} category="writing" />
	{/each}
</div>
