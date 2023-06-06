<script>
  import "../app.css";
  import Navigation from "$lib/components/navigation.svelte"
</script>

<Navigation />

<section class="hero h-screen flex flex-col bg-green-300 p-4 ">
  <div class="h-3/4 flex flex-col justify-center">
    <h3>
      Moving Castles is a game studio and design lab for autonomous worlds.
    </h3>
  </div>
  <div class="w-full sm:h-1/4 grid sm:grid-cols-2 gap-4">
    <a href="/test" class="flex py-20 sm:py-auto gap-4 border border-black justify-center items-center text-center hover:bg-black hover:text-white">
        Moving Castles - Body Builder
    </a>
    <a href="/test" class="flex py-20 sm:py-auto gap-4 border border-black justify-center items-center text-center hover:bg-black hover:text-white">
      Moving Castles Frontend Library
    </a>
  </div>
</section>



<div class="px-8">
  <slot />
</div>



<footer class="flex justify-between py-8 px-8">
  <p>
    2023 Copyright
  </p>
  <div class="flex gap-4">
    <a href="/team">
      Team
    </a>
    <a href="/writing">
      Writing
    </a>
    <a href="/team">
      Network
    </a>
    <a href="/team">
      Contact
    </a>
    <a href="/imprint">
      Impressum
    </a>
  </div>
</footer>