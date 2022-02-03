<script lang="ts">
  import type { Link } from '../dataType';

  export let link: Link;

  const { title, url } = link;
</script>

<article itemscope itemtype="http://schema.org/WebContent">
  <a href={url} itemprop="url" rel="external">{title}</a>
</article>
