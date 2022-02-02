<script>
  import { seo } from '../stores';
  $: subtitle = $seo.title === null ? 'Léo Maradan' : 'Léo Maradan - ' + $seo.title;
</script>

<svelte:head>
  <title>{subtitle}</title>
  <meta name="description" content={$seo.description ?? 'Site de Léo Maradan'} />
</svelte:head>
