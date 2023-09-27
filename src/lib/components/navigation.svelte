<script lang="ts">
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { MENU_ITEMS } from '$lib/modules/constants';
	import { beforeNavigate } from '$app/navigation';
	import { Hamburger } from 'svelte-hamburgers';

	let open = false;

	function close() {
		open = false;
	}

	beforeNavigate(close);
</script>

<svelte:window on:keydown|esc={close} />

<nav>
	<Hamburger
		type="squeeze"
		--layer-width="30px"
		--layer-height="2px"
		--color="rgba(193, 193, 193, 1)"
		bind:open
	/>
</nav>

{#if open}
	<menu>
		<div class="inner">
			{#each MENU_ITEMS as item}
				<div>
					<a
						href={item.href}
						data-sveltekit-noscroll
						class:underline={$page.url.hash === item.hash}
					>
						{item.name}
					</a>
				</div>
			{/each}
		</div>
	</menu>
{/if}

<style lang="scss">
	nav {
		position: fixed;
		top: 10px;
		right: 10px;
		z-index: 1000;
	}

	menu {
		margin: 0;
		padding: 0;
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 50%;
		color: var(--background-color);
		background: var(--foreground-color);

		display: flex;
		justify-content: center;
		align-items: center;

		.inner {
			text-align: center;
		}
	}
</style>
