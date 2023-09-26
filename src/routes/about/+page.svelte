<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	export let data;
	const { about } = data;
	console.log(data);
</script>

<div class="frontpage">
	<div>About</div>
	<div class="content">
		<Content post={about} />
	</div>
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
