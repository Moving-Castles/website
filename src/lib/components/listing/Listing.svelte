<script lang="ts">
	import SectionHead from '$lib/components/frontpage/SectionHead.svelte';
	import Card from '$lib/components/frontpage/Card.svelte';
	import type { Post, Project } from '$lib/modules/types';
	export let posts: Post[] | Project[] = [];
	export let title = '';
	export let category = '';
</script>

<div id="projects">
	<SectionHead>{title}</SectionHead>
	{#each posts as post}
		<Card {post} {category} />
	{/each}
</div>
