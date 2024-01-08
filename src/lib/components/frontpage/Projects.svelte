<script lang="ts">
	import SectionHead from '$lib/components/frontpage/SectionHead.svelte';
	import Card from '$lib/components/frontpage/Card.svelte';
	import type { Project } from '$lib/modules/types';
	export let projects: Project[] = [];
</script>

<div id="projects">
	<SectionHead>Projects</SectionHead>
	{#each projects as post}
		<Card {post} category="project" />
	{/each}
</div>
