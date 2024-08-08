<script lang="ts">
	import { renderBlockText } from '$lib/modules/sanity/';
	import type { Post, About, Project } from '$lib/types';
	export let post: Post | About | Project;
</script>

{#if post.content}
	{@html renderBlockText(post.content.content)}
{/if}
