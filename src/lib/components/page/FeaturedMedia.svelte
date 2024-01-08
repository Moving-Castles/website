<script lang="ts">
	import { onMount } from 'svelte';
	import { urlFor } from '$lib/modules/sanity';
	import type { Post, About, Project } from '$lib/modules/types';

	export let post: Post | About | Project;

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
		src={urlFor(post.featuredImage).width(1200).height(1200).auto('format').quality(100).url()}
		alt={post.title}
	/>
{/if}
