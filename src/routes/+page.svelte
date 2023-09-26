<script lang="ts">
	// import { page } from '$app/stores';
	import Hero from '$lib/components/frontpage/Hero.svelte';
	import Projects from '$lib/components/frontpage/Projects.svelte';
	import Writings from '$lib/components/frontpage/Writings.svelte';
	import Resources from '$lib/components/frontpage/Resources.svelte';
	import About from '$lib/components/frontpage/About.svelte';
	export let data;
	const { about, projects, writings, resources } = data;
	console.log(data);
</script>

<div class="frontpage">
	<Hero {about} />
	<Projects {projects} />
	<Writings {writings} />
	<Resources {resources} />
	<About {about} />
</div>

<style lang="scss">
	.frontpage {
		min-height: 100vh;
		width: 900px;
		margin-right: 0;
		margin-left: 0;
		padding: var(--default-padding);
	}
</style>
