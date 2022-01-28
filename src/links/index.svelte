<script lang="ts">
  import type { Data, Link } from "../dataType";

  import Label from "../components/Label.svelte";
  import { linksStore } from "../stores";

  let links: Link[] = [];

  linksStore.subscribe((l) => {
    links = l;
  });
</script>

<main>
  <Label title="Links Page" />
  <ul>
    {#each links as { title, url }}
      <li>
        <a target="_blank" href={url}>
          {title}
        </a>
      </li>
    {/each}
  </ul>
</main>
