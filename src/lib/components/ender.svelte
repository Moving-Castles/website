<script lang="ts">
	import type { Post } from '$lib/sanity';
	import { formatDate } from '$lib/sanity';
	import { urlFor } from '$lib/sanity/image';
	import { fade } from 'svelte/transition';
  import { onMount, onDestroy } from "svelte"
	export let post: Post;

	let tick = 0;
  let interval

  const ticker = () => tick++

  onMount(() => {
    interval = setInterval(ticker, 3000);
  })

  onDestroy(() => clearInterval(interval))
</script>

<a href="/#writings" class="card">
	{#if post.mainImage}
    <div class="h-[50vh]" style:background-image="url({urlFor(post.mainImage).url()})">

    </div>
	{:else}
		<div class="" />
	{/if}
  </a>

<style>
  .card {
    filter: invert(1) grayscale(1) ;
  }
</style>
