<script lang="ts">
	import type { Post } from '$lib/sanity';
	import { formatDate } from '$lib/sanity';
	import { urlFor } from '$lib/sanity/image';
	import { fade } from 'svelte/transition';
  import { onMount, onDestroy } from "svelte"
	export let post: Post;

	import { mask } from '$lib/transitions';

	let tick = 0;
  let interval

	const urls = ['/masks/1.jpg', '/masks/4.jpeg', '/masks/5.png', '/masks/6.png', '/masks/7.png'];
  const ticker = () => tick++

  onMount(() => {
    interval = setInterval(ticker, 3000);
  })

  onDestroy(() => clearInterval(interval))
</script>

<div class="card">
	{#if post.mainImage}
    {#key tick}
      <img
        class="w-screen h-[50vh] mask-1"
        src={urlFor(post.mainImage).url()}
        alt="Cover image for {post.title}"
      />
		{/key}
	{:else}
		<div class="" />
	{/if}

	<div class="">
		<h3 class="">
			<a class="" href={`/writing/${post.slug.current}`}>
				{post.title}
			</a>
		</h3>
		<p class="">{post.excerpt}</p>
		<p class="">
			{formatDate(post._createdAt)}
		</p>
	</div>
</div>

<style>
	.masked {
		-webkit-mask-image: url('/masks/1.jpg');
		mask-image: url('/masks/1.jpg');
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
		mask-position: 50% 50%;
    mask-mode: luminance;
	}
</style>
