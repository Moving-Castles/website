<script lang="ts">
	import type { PageData } from './$types';
	import Writing from '$lib/components/page/Writing.svelte';
	export let data: PageData;
	const { post } = data;
</script>

<Writing {post} />
