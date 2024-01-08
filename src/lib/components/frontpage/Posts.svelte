<script lang="ts">
	import SectionHead from '$lib/components/frontpage/SectionHead.svelte';
	import Card from '$lib/components/frontpage/Card.svelte';
	import type { Post } from '$lib/modules/types';
	export let posts: Post[] = [];
</script>

<div id="writings">
	<SectionHead>Posts</SectionHead>
	{#each posts as post}
		<Card {post} category="posts" />
	{/each}
</div>
