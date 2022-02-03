<script lang="ts">
  import type { EnrichedLink as EnrichedLinkType, Link } from '../dataType';
  import EnrichedLink from './EnrichedLink.svelte';
  import SimpleLink from './SimpleLink.svelte';

  export let link: Link | EnrichedLinkType;

  const enriched = link as EnrichedLinkType;
  const isEnriched = enriched.image !== undefined;
</script>

{#if isEnriched}
  <EnrichedLink link={enriched} />
{:else}
  <SimpleLink {link} />
{/if}
