import type { Data, Gallery } from './dataType';

import { derived, writable } from 'svelte/store';

export const data = writable<Data | null>(null);

export const seo = writable<{
  title: string | null;
  description: string | null;
}>({
  description: null,
  title: null
});

export const linksStore = derived(data, $data => {
  if ($data !== null) {
    return $data.links.sort((a, b) => a.order - b.order);
  }

  return [];
});

export const cvStore = derived(data, $data => {
  if ($data !== null) {
    return $data.cv;
  }

  return {};
});

export const galleriesStore = derived(data, $data => {
  if ($data !== null) {
    return $data.galleries;
  }

  return [];
});

export const getGallery = (galleryId: string, galleries: Gallery[]) => {
  return galleries.find(gallery => gallery.id === galleryId);
};

export const getPicture = (
  galleryId: string,
  pictureId: string,
  galleries: Gallery[]
) => {
  const gallery = getGallery(galleryId, galleries);

  if (gallery !== undefined) {
    return gallery.pictures.find(picture => picture.id === pictureId);
  }
};
