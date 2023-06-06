<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/sanity';
	import { urlFor } from '$lib/sanity/image';
	import type { PageData } from './$types';
  import Seo from "$lib/components/seo.svelte"
  import Card from "$lib/components/card.svelte"

	export let data: PageData;

  console.log(Object.keys(data))

</script>

<Seo />

<div class="min-h-screen bg-green-400">
  {#if data.mainImage}
    <!-- <Card post={data} /> -->
  {:else}
    <div class="w-screen h-[50vh]" />
  {/if}
  
  <section class="px-8 pt-24">
    <div class="post__container">
      <h1 class="post__title">{data.title}</h1>
      <p class="post__excerpt">{data.excerpt}</p>
      <p class="post__date">
        {formatDate(data._createdAt)}
      </p>
      <div class="post__content">
        <PortableText value={data.body} />
      </div>
    </div>
  </section>
</div>