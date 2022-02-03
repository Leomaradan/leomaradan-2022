<script lang="ts">
  import { marked } from 'marked';

  import type { EnrichedLink } from '../dataType';

  export let link: EnrichedLink;

  const { title, url, description, image } = link;
</script>

<article itemscope itemtype="http://schema.org/WebContent">
  <section class="image">
    <img src={`img/${image}`} itemprop="thumbnailUrl" alt={title} />
  </section>
  <h2>{title}</h2>
  <div itemprop="description">{@html marked(description)}</div>
  <a href={url} itemprop="url" rel="external">Lien</a>
</article>
