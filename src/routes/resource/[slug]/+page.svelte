<script lang="ts">
	import type { PageData } from './$types';
	import Resource from '$lib/components/page/Resource.svelte';
	export let data: PageData;
	const { post } = data;
</script>

<Resource {post} />
