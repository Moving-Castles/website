<script lang="ts">
	import { onMount } from 'svelte';
	import { urlFor } from '$lib/modules/sanity/';
	import type { Post, Project } from '$lib/types';
	import EmbedPlayer from '../elements/EmbedPlayer.svelte';
	import MuxPlayer from '../elements/MuxPlayer.svelte';
	import Swiper from 'swiper';
	import { has } from 'lodash-es';
	import 'swiper/css';
	export let post: Post | Project;

	let swiper: Swiper;
	let activeIndex = 0;

	$: isMultiSlide = has(swiper, 'slides') && swiper.slides.length > 1;
	$: isBeginning = activeIndex === 0;
	$: isEnd = has(swiper, 'slides') && activeIndex === swiper.slides.length - 1;

	const nextSlide = () => {
		swiper.slideNext();
	};

	const prevSlide = () => {
		swiper.slidePrev();
	};

	onMount(() => {
		swiper = new Swiper('.swiper');
		swiper.on('slideChange', () => {
			activeIndex = swiper.activeIndex;
		});
	});
</script>

{#if post.media}
	<div class="slideshow">
		<!-- Slider main container -->
		<div class="swiper">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				{#each post.media as media}
					<div class="swiper-slide">
						{#if media._type == 'image'}
							<img
								src={urlFor(media).width(800).height(600).auto('format').quality(100).url()}
								alt={post.title}
							/>
						{:else if media._type == 'video'}
							<MuxPlayer playbackId={media.playbackId} />
						{:else if media._type == 'videoEmbed'}
							<EmbedPlayer url={media.url} />
						{/if}
					</div>
				{/each}
			</div>
		</div>

		{#if isMultiSlide}
			<button class="arrow left" class:disabled={isBeginning} on:click={prevSlide}> ← </button>
			<button class="arrow right" class:disabled={isEnd} on:click={nextSlide}> → </button>
		{/if}

		<div class="caption">
			{#if isMultiSlide}
				<div>{activeIndex + 1}/{swiper.slides.length}</div>
			{/if}
			<!-- CAPTION ENGLISH -->
			{#if post.media[activeIndex]?.caption}
				<div class="caption-text">{post.media[activeIndex].caption}</div>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.slideshow {
		position: relative;

		.swiper {
			height: 75dvh;

			.swiper-wrapper {
				height: 100%;

				.swiper-slide {
					padding: var(--default-padding);
					height: 100%;
					width: 100%;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 5rem;
					user-select: none;
					cursor: grab;

					img {
						max-height: 100%;
						max-width: 100%;

						// @include screen-size('small') {
						// 	max-width: 80%;
						// }
					}
				}
			}
		}

		button {
			border: 0;
			background: transparent;
			font-size: var(--font-size-normal);
			font-family: var(--font-family);
			cursor: pointer;
			padding: 0;
			color: var(--white);
		}

		.close {
			&:hover {
				color: var(--orange);
			}
		}

		.arrow {
			position: absolute;
			bottom: -5%;
			z-index: 10000;
			border: var(--default-border);
			color: var(--dark-grey);
			padding: 10px;

			&.left {
				left: 7%;
			}

			&.right {
				right: 7%;
			}

			&:hover {
				background: var(--dark-grey);
				color: var(--black);
			}

			&.disabled {
				opacity: 0.3;
				pointer-events: none;
			}
		}

		.caption {
			position: absolute;
			bottom: -5%;
			left: 50%;
			transform: translateX(-50%);
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
	}
</style>
