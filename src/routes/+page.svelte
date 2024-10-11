<script lang="ts">
	import Metadata from '$lib/components/elements/Metadata.svelte';
	import ContactScreen from '$lib/components/frontpage/ContactScreen.svelte';

	import LogoScreen from '$lib/components/frontpage/LogoScreen.svelte';
	import ProjectsScreen from '$lib/components/frontpage/ProjectsScreen.svelte';
	import TaglineScreen from '$lib/components/frontpage/TaglineScreen.svelte';
	import WritingsScreen from '$lib/components/frontpage/WritingsScreen.svelte';

	export let data;
	const { about, projects, posts } = data;
</script>

<Metadata />

<div class="container">
	<!-- SCREEN 1: Logo-->
	<LogoScreen />
	<!-- SCREEN 2: Tagline & menu -->
	<TaglineScreen {about}/>
	<!-- SCREEN 3: Projects -->
	<ProjectsScreen {projects}/>
	<!-- SCREEN 4: Writings -->
	<WritingsScreen {posts}/>
	<!-- SCREEN 5: Contact -->
	<ContactScreen {about} />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
	}
</style>
