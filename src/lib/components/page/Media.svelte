<script lang="ts">
	import { urlFor } from '$lib/modules/sanity';
	export let post: any;
</script>

{#if post.images}
	{#each post.images as image}
		<div class="image">
			<img
				src={urlFor(image).width(800).height(600).auto('format').quality(100).url()}
				alt={post.title}
			/>
		</div>
	{/each}
{/if}
