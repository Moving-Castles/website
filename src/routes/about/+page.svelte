<script lang="ts">
	import About from '$lib/components/page/About.svelte';
	export let data;
	const { about } = data;
</script>

<About post={about} />
