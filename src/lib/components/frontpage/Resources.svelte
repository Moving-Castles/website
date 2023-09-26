<script lang="ts">
	export let resources: any[] = [];
</script>

<div id="writings">
	<h3>Resources</h3>
	{#each resources as post}
		<a href="/resource/{post.slug.current}">
			<div>{post.title}</div>
		</a>
	{/each}
</div>

<style>
	a {
		display: block;
	}
</style>
