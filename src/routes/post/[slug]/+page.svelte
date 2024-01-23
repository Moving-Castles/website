<script lang="ts">
	import type { PageData } from './$types';
	import Post from '$lib/components/page/Post.svelte';
	import Metadata from '$lib/components/elements/Metadata.svelte';
	export let data: PageData;
	const { post } = data;
</script>

<Metadata {post} />
<Post {post} />
