<script lang="ts">
	import SectionHead from '$lib/components/frontpage/SectionHead.svelte';
	import Card from '$lib/components/frontpage/Card.svelte';
	export let posts: any[] = [];
	export let title = '';
	export let category = '';
</script>

<div id="projects">
	<SectionHead>{title}</SectionHead>
	{#each posts as post}
		<Card {post} {category} />
	{/each}
</div>
