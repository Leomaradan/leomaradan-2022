<script lang="ts">
  import type { CVSection } from "../dataType";
  import { marked } from "marked";

  import Label from "../components/Label.svelte";
  import { cvStore } from "../stores";

  let sections: CVSection[] = [];

  cvStore.subscribe((cv) => {
    sections = cv;
  });
</script>

<main>
  <Label title="CV Page" />

  {#each sections as { title, content }}
    <h1>{title}</h1>
    <p>{@html marked(content)}</p>
  {/each}
</main>
