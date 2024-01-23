<script lang="ts">
	import type { PageData } from './$types';
	import Project from '$lib/components/page/Project.svelte';
	import Metadata from '$lib/components/elements/Metadata.svelte';
	export let data: PageData;
	const { post } = data;
</script>

<Metadata {post} />
<Project {post} />
