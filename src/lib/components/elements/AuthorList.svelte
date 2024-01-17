<script lang="ts">
	export let authors: string[] = [];
</script>

{#each authors as author}
	<span class="author">{author}, </span>
{/each}
