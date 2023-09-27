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

<Hero {about} />
<Projects {projects} />
<Writings {writings} />
<Resources {resources} />
<About {about} />

<style lang="scss">
	.frontpage {
		min-height: 100vh;
		// padding: var(--default-padding);
		padding: 0;
	}
</style>
