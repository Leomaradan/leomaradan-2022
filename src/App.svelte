<script type="ts">
  import Router from "./routes/index.svelte";
  import { onMount } from "svelte";
  import { data } from "./stores";
  import type { Data } from "./dataType";

  onMount(async () => {
    const response = await fetch("/data.json");
    data.set((await response.json()) as Data);
  });
</script>

<main>
  <Router />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
