<script lang="ts">
  import { Route } from 'svelte-routing';

  import CV from '../cv/index.svelte';
  import Home from '../Home.svelte';
  import Galleries from '../galleries/index.svelte';
  import Gallery from '../galleries/Gallery.svelte';
  import Picture from '../galleries/Picture.svelte';
  import Portfolio from '../portfolio/index.svelte';
</script>

<Route path="cv" component={CV} />
<Route path="gallery/:gallery/:photo" let:params
  ><Picture galleryId={params.gallery} pictureId={params.photo} /></Route
>
<Route path="gallery/:gallery" let:params><Gallery galleryId={params.gallery} /></Route>
<Route path="gallery" component={Galleries} />
<Route path="portfolio" component={Portfolio} />
<Route path="/" component={Home} />
