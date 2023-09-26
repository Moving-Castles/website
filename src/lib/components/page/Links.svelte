<script lang="ts">
	export let post: any;
</script>

{#if post.links}
	{#each post.links as link}
		<div class="link">
			<a href={link.url} target="_blank">{link.title}</a>
		</div>
	{/each}
{/if}
