<script lang="ts">
	import type { PageData } from './$types';
	import SEO from '$lib/components/SEO.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import FeaturedMedia from '$lib/components/page/FeaturedMedia.svelte';
	import Links from '$lib/components/page/Links.svelte';
	import Media from '$lib/components/page/Media.svelte';

	export let data: PageData;
	const { post } = data;

	console.log(post);
</script>

<SEO />

<div>
	<h1>{post.title}</h1>
	<div class="featured-media">
		<FeaturedMedia {post} />
	</div>
	<div class="media">
		<Media {post} />
	</div>
	<div class="content">
		<Content {post} />
	</div>
	<div class="links">
		<Links {post} />
	</div>
</div>
