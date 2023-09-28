<script lang="ts">
	import SectionHead from '$lib/components/frontpage/SectionHead.svelte';
	import FeaturedMedia from '../page/FeaturedMedia.svelte';
	export let writings: any[] = [];
</script>

<div id="writings">
	<SectionHead>Writings</SectionHead>
	{#each writings as post}
		<a href="/writing/{post.slug.current}">
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
				display: flex;
				justify-content: center;
				align-items: center;

				:global(img) {
					width: 80%;
					max-height: 80%;
					object-fit: cover;
					border-radius: 20px;
				}

				:global(.video-container) {
					width: 80%;
					max-height: 80%;
					object-fit: cover;
					// border-radius: 20px;
					overflow: hidden;
					pointer-events: none;
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
