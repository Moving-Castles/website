<script lang="ts">
	import { urlFor } from '$lib/modules/sanity';
	export let post: any;
</script>

{#if post.featuredImage}
	<img
		src={urlFor(post.featuredImage).width(800).height(600).auto('format').quality(100).url()}
		alt={post.title}
	/>
{/if}
