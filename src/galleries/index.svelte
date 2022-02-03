<script lang="ts">
  import { galleriesStore, seo } from '../stores';

  import { Link } from 'svelte-routing';

  $seo = {
    title: 'Galleries',
    description: 'Galleries de photographies prises par Léo Maradan'
  };
</script>

<main>
  <ul>
    {#each $galleriesStore as { title, id }}
      <li>
        <Link to="gallery/{id}">{title}</Link>
      </li>
    {/each}
  </ul>
</main>
