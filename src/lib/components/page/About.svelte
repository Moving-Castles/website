<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	export let post: any;
</script>

<div class="container">
	<div class="column right">
		<div>{post.title}</div>
		<div class="content">
			<Content {post} />
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: block;
		display: flex;
		background: transparent;
		padding-top: 100px;
		justify-content: center;
		padding-bottom: 200px;

		.column {
			width: 50%;

			&.left {
				display: flex;
				justify-content: center;
				align-items: center;

				:global(img) {
					width: 80%;
					max-width: 400px;
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
