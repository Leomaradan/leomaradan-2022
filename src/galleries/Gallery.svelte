<script lang="ts">
  import { galleriesStore, getGallery } from "../stores";

  import Label from "../components/Label.svelte";
  import type { Gallery } from "../dataType";
  import { Link } from "svelte-routing";

  let galleries: Gallery[] = [];

  export let galleryId: string;

  $: gallery = getGallery(galleryId, galleries);

  $: galleryPictures = gallery?.pictures ?? [];

  galleriesStore.subscribe((g) => {
    galleries = g;
  });
</script>

<main>
  <Label title="Gallery" />
  {gallery?.title}
  <ul>
    {#each galleryPictures as { id: pictureId, name }}
      <li>
        <Link to="gallery/{galleryId}/{pictureId}">{name}</Link>
      </li>
    {/each}
  </ul>
</main>
