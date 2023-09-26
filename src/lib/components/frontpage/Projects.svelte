<script lang="ts">
	export let projects: any[] = [];
</script>

<div id="writings">
	<h3>Projects</h3>
	{#each projects as post}
		<a href="/project/{post.slug.current}">
			<div>{post.title}</div>
		</a>
	{/each}
</div>

<style>
	a {
		display: block;
	}
</style>
