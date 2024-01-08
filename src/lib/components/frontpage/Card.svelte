<script lang="ts">
	import FeaturedMedia from '../page/FeaturedMedia.svelte';
	import type { Post, Project } from '$lib/modules/types';
	export let post: Post | Project;
	export let category: string;
</script>

<a class="card" href="/post/{post.slug.current}">
	<div class="column left">
		<FeaturedMedia {post} />
	</div>
	<!-- <div class="column right">
		<div>{post.title}</div>
	</div> -->
</a>

<style lang="scss">
	.card {
		display: block;
		height: 100vh;
		max-height: 800px;
		display: flex;
		background: transparent;

		&:hover {
			background: var(--hover-color);
		}

		.column {
			width: 100%;

			&.left {
				display: flex;
				justify-content: center;
				align-items: center;

				:global(img) {
					width: 100%;
					max-height: 100%;
					object-fit: cover;
				}

				:global(.video-container) {
					width: 80%;
					max-height: 80%;
					object-fit: cover;
					// border-radius: 20px;
					overflow: hidden;
					pointer-events: none;
					border-radius: 10px;
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
