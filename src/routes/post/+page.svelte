<script lang="ts">
	import Listing from '$lib/components/listing/Listing.svelte';
	export let data;
	const { posts } = data;
</script>

<Listing {posts} title="Writing" category="writing" />
