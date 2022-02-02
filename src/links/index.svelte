<script lang="ts">
  import type { Link } from '../dataType';

  import Label from '../components/Label.svelte';
  import { linksStore, seo } from '../stores';

  let links: Link[] = [];

  linksStore.subscribe(l => {
    links = l;
  });

  $seo = {
    title: 'Liens',
    description: 'Divers liens relatif à des travaux de Léo Maradan'
  };
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
