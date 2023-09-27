<script lang="ts">
	import SectionHead from '$lib/components/frontpage/SectionHead.svelte';
	import FeaturedMedia from '../page/FeaturedMedia.svelte';
	export let resources: any[] = [];
</script>

<div id="writings">
	<SectionHead>Resources</SectionHead>
	{#each resources as post}
		<a href="/resource/{post.slug.current}">
			<div class="column left">
				<FeaturedMedia {post} />
			</div>
			<div class="column right">
				<div>{post.title}</div>
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
	a {
		display: block;
		height: 50vh;
		display: flex;

		.column {
			width: 50%;

			&.left {
				// background: radial-gradient(circle, red, orangered);
				// background: var(--background-accent);

				:global(img) {
					width: 80%;
					max-height: 80%;
					object-fit: cover;
				}
			}

			&.right {
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
			}
		}
	}
</style>
