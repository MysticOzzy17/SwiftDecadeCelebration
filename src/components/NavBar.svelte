<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Code from "lucide-svelte/icons/code";

  export let activeTab;

  const tabs = ["timeline", "game"];
  const dispatch = createEventDispatcher();

  function changeTab(tab: string) {
    dispatch("changeTab", tab);
  }
</script>

<nav
  class="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
>
  <div class="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center space-x-2">
      <div class="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-lg">
        <Code class="w-6 h-6 text-white" />
      </div>
      <span class="font-bold text-xl tracking-tight">
        Swift<span class="text-orange-500">Decade</span>
      </span>
    </div>

    <!-- Tabs -->
    <div class="flex space-x-1 bg-slate-800 p-1 rounded-full">
      {#each tabs as tab}
        <button
          on:click={() => changeTab(tab)}
          class="px-4 py-1.5 rounded-full text-sm font-medium transition-all
            {activeTab === tab
            ? 'bg-slate-700 text-white shadow-sm'
            : 'text-slate-400 hover:text-slate-200'}"
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      {/each}
    </div>
  </div>
</nav>
