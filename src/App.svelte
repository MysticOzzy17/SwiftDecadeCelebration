<script>
  import {
    Terminal,
    Code,
    Cpu,
    Globe,
    Zap,
    Shield,
    ChevronRight,
    Bug,
    Heart,
    Share2,
    Play,
    RefreshCw,
  } from "lucide-svelte";

  import TimelineView from "./components/TimelineView.svelte";

  import BugSquashGame from "./BugSquashGame.svelte";

  import Footer from "./Footer.svelte";

  import NavBar from "./components/NavBar.svelte";

  import { CODE_SNIPPETS } from "./data/code_snippets";

  import { EVENTS } from "./data/events";

  let activeTab = "timeline";
</script>

<div
  class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500/30"
>
  <NavBar {activeTab} on:changeTab={(e) => (activeTab = e.detail)} />

  <main class="max-w-4xl mx-auto px-4 py-8">
    {#if activeTab === "timeline"}
      <TimelineView />
    {/if}

    {#if activeTab === "game"}
      <BugSquashGame />
    {/if}
  </main>

  <Footer />
</div>
