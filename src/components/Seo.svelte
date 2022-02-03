<script>
  import { afterUpdate } from 'svelte';

  import { seo } from '../stores';
  $: subtitle = $seo.title === null ? 'Léo Maradan' : 'Léo Maradan - ' + $seo.title;

  afterUpdate(() => {
    console.log('the component just updated');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    window.$('.parallax-window').parallax({ imageSrc: 'img/cover.jpg' });
  });
</script>

<svelte:head>
  <title>{subtitle}</title>
  <meta name="description" content={$seo.description ?? 'Site de Léo Maradan'} />
</svelte:head>
