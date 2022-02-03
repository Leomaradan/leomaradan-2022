<script lang="ts">
  import { galleriesStore, getPicture } from '../stores';

  import type { Gallery } from '../dataType';

  export let galleryId: string;
  export let pictureId: string;

  let galleries: Gallery[] = [];

  $: picture = getPicture(galleryId, pictureId, galleries);

  galleriesStore.subscribe(g => {
    galleries = g;
  });
</script>

<main>
  {picture?.name}
</main>
