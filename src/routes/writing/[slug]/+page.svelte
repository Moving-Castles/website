<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/sanity';
	import { urlFor } from '$lib/sanity/image';
	import type { PageData } from './$types';
  import Seo from "$lib/components/seo.svelte"
  import Card from "$lib/components/card.svelte"
  import Ender from "$lib/components/ender.svelte"

	export let data: PageData;

  console.log(Object.keys(data))

</script>

<Seo />

<div class="min-h-screen bg-picton">
  <div class="mix-blend-multiply">
    {#if data.mainImage}
      <Card post={data} />
    {:else}
      <div class="w-screen h-[50vh]" />
    {/if}
  </div>
  
  <section class="content px-8 pb-24 max-w-screen-sm">
    <PortableText value={data.body} />
  </section>

  <div class="mix-blend-multiply">
    <Ender post={data} />
  </div>

</div>

<style>
  .content :global(p) {
    @apply mb-4;
  }
</style>