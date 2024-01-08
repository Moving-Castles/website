<script lang="ts">
	import type { PageData } from './$types';
	import Post from '$lib/components/page/Post.svelte';
	export let data: PageData;
	const { post } = data;
</script>

<Post {post} />
