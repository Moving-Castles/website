<script lang="ts">
	import { renderBlockText } from '$lib/modules/sanity';
	export let post: any;
</script>

{#if post.content}
	{@html renderBlockText(post.content.content)}
{/if}
