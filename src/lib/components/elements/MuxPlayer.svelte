<script lang="ts">
	import { onMount } from 'svelte';
	export let playbackId = '';

	onMount(async () => {
		await import('@mux/mux-player');
	});
</script>

<div class="video-container">
	<mux-player playback-id={playbackId} stream-type="on-demand" loop muted autoplay />
</div>
