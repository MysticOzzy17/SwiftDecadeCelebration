<script>
  import Hero from "./Hero.svelte";
  import TimelineCard from "./TimelineCard.svelte";
  import { Heart } from "lucide-svelte";
  import { EVENTS } from "../data/events.js";
</script>

<div class="space-y-12 animate-fade-in">
  <Hero />

  <!-- Timeline line + cards -->
  <div class="relative">
    <div
      class="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800 hidden md:block"
    />

    <div class="space-y-8">
      {#each EVENTS as event, index}
        <TimelineCard {event} {index} />
      {/each}
    </div>
  </div>

  <!-- "What's Next?" section -->
  <div
    class="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 text-center"
  >
    <h3 class="text-2xl font-bold mb-4">What's Next?</h3>
    <p class="text-slate-400 mb-6">
      The next 10 years bring embedded Swift, even safer systems, and expansion
      into new frontiers.
    </p>
    <button
      class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center mx-auto space-x-2"
    >
      <Heart class="w-4 h-4 fill-current" />
      <span>Keep Contributing</span>
    </button>
  </div>
</div>
