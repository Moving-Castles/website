<script lang="ts">
	// import { page } from '$app/stores';
	import Projects from '$lib/components/frontpage/Projects.svelte';
	import Posts from '$lib/components/frontpage/Posts.svelte';
	import About from '$lib/components/frontpage/About.svelte';
	import Hero2 from '$lib/components/frontpage/Hero2.svelte';
	import Hero4 from '$lib/components/frontpage/Hero4.svelte';
	import Dots from '$lib/components/elements/Dots.svelte';
	import Tagline from '$lib/components/frontpage/Tagline.svelte';
	export let data;
	const { about, projects, posts } = data;
</script>

<Hero2 {about} />

<div class="container">
	<Dots />
	<Tagline {about} />
	<div class="about list">
		<About {about} />
	</div>
	<Dots />
	<div class="projects list">
		<Projects posts={projects} />
	</div>
	<Dots />

	<div class="writings list">
		<Posts {posts} />
	</div>
	<Dots />
</div>

<Hero4 {about} />

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;

		.list {
			width: 100%;
		}
	}
</style>
