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
	<a href="/" data-sveltekit-preload-data>Moving Castles</a>
</nav>

<style lang="scss">
	nav {
		width: 100%;
		height: 40px;
		display: flex;
		align-items: center;
		padding-left: 30px;
		padding-right: 30px;
		border-bottom: 1px solid grey;
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
		z-index: var(--navigation-z);
		font-family: var(--display-family);
		font-size: 3em;
		line-height: 1.3em;

		display: flex;
		justify-content: center;
		align-items: center;

		.inner {
			text-align: center;

			a {
				&:hover {
					color: var(--accent-color);
				}
			}
		}
	}
</style>
