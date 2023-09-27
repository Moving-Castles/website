<div class="section-head">
	<!-- <div class="column left" /> -->
	<div class="column right">
		<span class="inner">
			<slot />
		</span>
	</div>
</div>

<style lang="scss">
	.section-head {
		display: block;
		width: 100%;
		height: 80px;
		text-align: center;
		line-height: 80px;
		color: var(--background-color);
		display: flex;
		// justify-content: center;

		.column {
			width: 50%;
			&.right {
				display: flex;
				justify-content: center;
				align-items: center;
				background: var(--foreground-color);
				// background: rgba(30, 30, 30, 1);
				// color: var(--foreground-color);

				.inner {
					padding: 10px 20px;
					height: 2ch;
					line-height: 0.1ch;
				}
			}
		}
	}
</style>
