<script lang="ts">
	// import { page } from '$app/stores';
	import Hero3 from '$lib/components/frontpage/Hero3.svelte';
	import Projects from '$lib/components/frontpage/Projects.svelte';
	import Writings from '$lib/components/frontpage/Writings.svelte';
	import Resources from '$lib/components/frontpage/Resources.svelte';
	import About from '$lib/components/frontpage/About.svelte';
	import Hero2 from '$lib/components/frontpage/Hero2.svelte';
	export let data;
	const { about, projects, writings, resources } = data;
	console.log(data);
</script>

<Hero3 {about} />

<div class="container">
	<div class="projects list">
		<Projects {projects} />
	</div>
	<div class="writings list">
		<Writings {writings} />
	</div>
	<div class="resources list">
		<Resources {resources} />
	</div>
	<div class="about list">
		<About {about} />
	</div>
</div>
<Hero2 {about} />

<style lang="scss">
	.frontpage {
		min-height: 100vh;
		// padding: var(--default-padding);
		padding: 0;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		.list {
			width: 100%;
		}
	}
</style>
