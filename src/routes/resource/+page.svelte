<script lang="ts">
	export let data;
	const { posts } = data;
	console.log(data);
</script>

<div class="listing">
	{#each posts as post}
		<a href={'/resource/' + post.slug.current}>
			<div>{post.title}</div>
		</a>
	{/each}
</div>
