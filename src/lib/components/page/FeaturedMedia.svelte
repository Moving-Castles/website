<script lang="ts">
	import { onMount } from 'svelte';
	import { urlFor } from '$lib/modules/sanity';

	export let post: any;

	onMount(async () => {
		await import('@mux/mux-player');
	});
</script>

{#if post.playbackId}
	<div class="video-container">
		<mux-player playback-id={post.playbackId} stream-type="on-demand" loop muted autoplay />
	</div>
{:else if post.featuredImage}
	<img
		src={urlFor(post.featuredImage).width(800).height(600).auto('format').quality(100).url()}
		alt={post.title}
	/>
{/if}
