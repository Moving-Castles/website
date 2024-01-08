<script lang="ts">
	import type { Post, About, Project } from '$lib/modules/types';
	export let post: Post | About | Project;
</script>

{#if post.links}
	{#each post.links as link}
		<div class="link">
			<a href={link.url} target="_blank">{link.title}</a>
		</div>
	{/each}
{/if}
