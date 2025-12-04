import { Globe, RefreshCw, Cpu, Terminal, Zap, Shield } from "lucide-svelte";

export const EVENTS = [
    {
      year: "2015",
      title: "Hello, Open Source",
      description:
        "Apple releases Swift as open source (Dec 3), bringing the language to Linux and inviting the world to contribute.",
      icon: Globe,
      color: "border-orange-500",
      iconClass: "w-6 h-6 text-orange-500",
    },
    {
      year: "2016",
      title: "The Great Renaming",
      description:
        "Swift 3 brings massive breaking changes to standardise naming conventions. Painful, but necessary for the future.",
      icon: RefreshCw,
      color: "border-red-500",
      iconClass: "w-6 h-6 text-red-500",
    },
    {
      year: "2019",
      title: "ABI Stability",
      description:
        "Swift 5 arrives! Apps no longer need to bundle the Swift runtime, reducing app sizes and enabling system-level integration.",
      icon: Cpu,
      color: "border-blue-500",
      iconClass: "w-6 h-6 text-blue-500",
    },
    {
      year: "2020",
      title: "Swift on Windows",
      description:
        "Official support for Windows arrives, expanding the ecosystem beyond Apple and Linux environments.",
      icon: Terminal,
      color: "border-purple-500",
      iconClass: "w-6 h-6 text-purple-500",
    },
    {
      year: "2021",
      title: "Concurrency",
      description:
        "Swift 5.5 introduces async/await, actors, and structured concurrency, changing how we write asynchronous code forever.",
      icon: Zap,
      color: "border-yellow-500",
      iconClass: "w-6 h-6 text-yellow-500",
    },
    {
      year: "2024",
      title: "Swift 6",
      description:
        "The 10th anniversary year brings Swift 6 with strict concurrency checking, eliminating data races by default.",
      icon: Shield,
      color: "border-green-500",
      iconClass: "w-6 h-6 text-green-500",
    },
  ];