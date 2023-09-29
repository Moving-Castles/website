<script lang="ts">
	import About from '$lib/components/page/About.svelte';
	export let data;
	const { about } = data;
	console.log(data);
</script>

<About post={about} />
