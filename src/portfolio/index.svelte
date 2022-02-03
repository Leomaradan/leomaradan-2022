<script lang="ts">
  import { linksStore, seo } from '../stores';
  import Link from './Link.svelte';

  $seo = {
    title: 'Portfolio',
    description: 'Divers liens relatif à des travaux de Léo Maradan'
  };
</script>

<main>
  <h1>Portfolio</h1>
  {#each $linksStore as link}
    <Link {link} />
  {/each}
</main>
