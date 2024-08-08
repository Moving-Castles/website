<script lang="ts">
	// import { page } from '$app/stores';
	import Listing from '$lib/components/frontpage/Listing.svelte';
	import About from '$lib/components/frontpage/About.svelte';
	import Hero2 from '$lib/components/frontpage/Hero2.svelte';
	import Hero4 from '$lib/components/frontpage/Hero4.svelte';
	import Dots from '$lib/components/elements/Dots.svelte';
	import Tagline from '$lib/components/frontpage/Tagline.svelte';
	import { PROJECT_COLUMNS, POST_COLUMNS } from '$lib/constants/index.js';
	import Metadata from '$lib/components/elements/Metadata.svelte';
	export let data;
	const { about, projects, posts } = data;
</script>

<Metadata />

<div class="container">
	<!-- HERO START-->
	<Hero2 />
	<!-- ... -->
	<Dots />
	<Tagline {about} />
	<!-- ABOUT -->
	<About {about} />
	<!-- ... -->
	<Dots />
	<!-- PROJECTS -->
	<Listing
		title="Projects"
		id="projects"
		type="project"
		columns={PROJECT_COLUMNS}
		posts={projects}
	/>
	<!-- ... -->
	<Dots />
	<!-- WRITINGS & RESOURCES -->
	<Listing title="Writing & Resources" id="writings" type="post" columns={POST_COLUMNS} {posts} />
	<!-- ... -->
	<Dots />
	<!-- HERO END-->
	<Hero4 />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
	}
</style>
