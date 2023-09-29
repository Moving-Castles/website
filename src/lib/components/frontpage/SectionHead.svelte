<div class="section-head">
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
		height: 220px;
		text-align: center;
		line-height: 240px;
		display: flex;
		font-family: var(--display-family);
		font-size: 4em;

		.column {
			width: 100%;
			height: 100%;
			&.right {
				display: flex;
				justify-content: center;
				align-items: center;

				.inner {
					padding: 10px 20px;
				}
			}
		}
	}
</style>
