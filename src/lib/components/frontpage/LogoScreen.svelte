<script lang="ts">
	const scrollDown = () => {
		const targetEl = document.getElementById('menu');
		if (!targetEl) return;
		targetEl.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div role='presentation' class='screen' on:click={scrollDown}>
	<img src="/images/xxx.jpg" alt="Core" />
</div>

<style lang="scss">
	@import '../../styles/responsive.scss';

	.screen {
		text-align: center;
		height: 100dvh;
		width: 100dvw;
		padding: 0;
		margin: 0;
		display: flex;
        justify-content: center;
        align-items: center;
		user-select: none;
		cursor: pointer;

		// @include screen-size('small') {
		// 	height: calc(100dvh - 120px);
		// }

        img {
            width: 200px;
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
</style>
