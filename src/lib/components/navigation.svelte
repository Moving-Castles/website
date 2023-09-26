<script lang="ts">
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	import { MENU_ITEMS } from '$lib/modules/constants';

	let open = false;

	function close() {
		open = false;
	}

	beforeNavigate(close);
</script>

<svelte:window on:keydown|esc={close} />

<nav>
	<a data-sveltekit-noscroll href="/">Moving Castles</a>

	<ul>
		{#each MENU_ITEMS as item}
			<li>
				<a href={item.href} data-sveltekit-noscroll class:underline={$page.url.hash === item.hash}>
					{item.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		display: flex;
		flex-direction: column;
		padding: var(--default-padding);
	}
</style>
