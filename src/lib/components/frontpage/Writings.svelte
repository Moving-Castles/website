<script lang="ts">
	export let writings: any[] = [];
</script>

<div id="writings">
	<h3>Writings</h3>
	{#each writings as post}
		<a href="/writing/{post.slug.current}">
			<div>{post.title}</div>
		</a>
	{/each}
</div>
