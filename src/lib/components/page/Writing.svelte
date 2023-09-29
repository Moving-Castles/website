<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	import FeaturedMedia from '$lib/components/page/FeaturedMedia.svelte';
	import Links from '$lib/components/page/Links.svelte';
	import Media from '$lib/components/page/Media.svelte';
	export let post: any;
</script>

<div class="container">
	<div class="column left">
		<div class="featured-media">
			<FeaturedMedia {post} />
			<div class="media">
				<Media {post} />
			</div>
		</div>
	</div>
	<div class="column right">
		<div>{post.title}</div>
		<div class="content">
			<Content {post} />
		</div>
		<div class="links">
			<Links {post} />
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: block;
		display: flex;
		background: transparent;
		padding-top: 100px;

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
					border-radius: 10px;
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
				padding-left: 20px;
				padding-right: 20px;
			}
		}
	}
</style>
