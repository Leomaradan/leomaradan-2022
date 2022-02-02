<script lang="ts">
  import { galleriesStore, seo } from '../stores';

  import Label from '../components/Label.svelte';
  import type { Gallery } from '../dataType';
  import { Link } from 'svelte-routing';

  let galleries: Gallery[] = [];

  galleriesStore.subscribe(g => {
    galleries = g;
  });

  $seo = {
    title: 'Galleries',
    description: 'Galleries de photographies prises par Léo Maradan'
  };
</script>

<main>
  <Label title="Galleries" />
  <ul>
    {#each galleries as { title, id }}
      <li>
        <Link to="gallery/{id}">{title}</Link>
      </li>
    {/each}
  </ul>
</main>
