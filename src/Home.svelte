<script lang="ts">
  import { Link } from 'svelte-routing';
  import { seo } from './stores';

  $seo = {
    title: null,
    description: null
  };
</script>

<main>
  <Link to="cv">CV</Link><br />
  <Link to="gallery">Galleries</Link>
  <Link to="links">Links</Link>
</main>
