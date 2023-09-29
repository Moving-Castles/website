<script lang="ts">
	import type { PageData } from './$types';
	import Project from '$lib/components/page/Project.svelte';
	export let data: PageData;
	const { post } = data;
</script>

<Project {post} />
