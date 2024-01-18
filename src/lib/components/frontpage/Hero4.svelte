<script lang="ts">
	import Overlay from '../elements/Overlay.svelte';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<header>
	<Overlay />

	<div class="core one">
		<img src="/images/core2.png" alt="Core" />
	</div>

	<div class="core two">
		<img src="/images/core3.png" alt="Core" />
	</div>
</header>

<style lang="scss">
	@import '../../styles/responsive.scss';

	header {
		text-align: center;
		height: 100dvh;
		width: 100dvw;
		padding: 0;
		margin: 0;
		display: flex;
		user-select: none;
		position: relative;
		background: radial-gradient(circle, red, orangered);

		// @include screen-size('small') {
		// 	height: calc(100dvh - 120px);
		// }

		.core {
			position: absolute;

			&.one {
				top: 20%;
				left: 10%;

				img {
					mix-blend-mode: multiply;
					height: 600px;
					animation: bobUpAndDown 2s infinite; /* 1s is the duration, adjust as needed */

					@include screen-size('small') {
						left: 0;
						top: 0;
						width: 100%;
						height: unset;
						max-height: 70dvh;
					}
				}
			}
			&.two {
				top: 10%;
				left: 60%;
				img {
					mix-blend-mode: multiply;
					height: 400px;
					animation: bobUpAndDown2 2s infinite; /* 1s is the duration, adjust as needed */

					@include screen-size('small') {
						display: none;
						width: 100%;
						height: unset;
						max-height: 90dvh;
					}
				}
			}
		}
	}

	@keyframes bobUpAndDown {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px); /* Adjust the value as needed for desired bobbing distance */
		}
	}

	@keyframes bobUpAndDown2 {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-25px); /* Adjust the value as needed for desired bobbing distance */
		}
	}
</style>
