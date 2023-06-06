<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers'

	import { fade } from 'svelte/transition'
  import { page } from "$app/stores"
  import { beforeNavigate } from "$app/navigation"

	let open = false

	function close() {
		open = false
	}

  beforeNavigate(close)
</script>

<svelte:window on:keydown|esc={close} />

<!-- <svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/collapse.css" />
</svelte:head> -->

<nav class="flex justify-between fixed w-full top-0 py-4 px-8 text-xl">
  <a href="/">
    <h1>
      Moving Castles
    </h1>
  </a>

  <div class="sm:hidden">
    <Hamburger
      bind:open
      type="collapse"
      --padding="10px"
      --layer-height="1.5px"
      --layer-width="25px"
      --layer-spacing="6px"
    />
  </div>

  <ul class="hidden sm:flex gap-4">
    <li>
      <a href="#projects" class:underline={$page.url.hash === '#projects'}>
        Projects        
      </a>
    </li>
    <li>
      <a href="#resources" class:underline={$page.url.hash === '#resources'}>
        Resources        
      </a>
    </li>
    <li>
      <a href="#about" class:underline={$page.url.hash === '#about'}>
        About       
      </a>
    </li>
  </ul>
</nav>


{#if open}
	<div class="bg-white fixed inset-0 px-8 py-4" transition:fade on:click|self={close}>
    <ul class="gap-4">
      <li>
        <a on:click={close} href="#projects" class:underline={$page.url.hash === '#projects'}>
          Projects        
        </a>
      </li>
      <li>
        <a on:click={close} href="#resources" class:underline={$page.url.hash === '#resources'}>
          Resources        
        </a>
      </li>
      <li>
        <a on:click={close} href="#about" class:underline={$page.url.hash === '#about'}>
          About       
        </a>
      </li>
    </ul>
	</div>
{/if}