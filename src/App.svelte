<script type="ts">
  import Routes from './routes/index.svelte';
  import Layout from './components/Layout.svelte';
  import { Router } from 'svelte-routing';
  import { onMount } from 'svelte';
  import { data } from './stores';
  import type { Data } from './dataType';

  onMount(async () => {
    const response = await fetch('/data.json');
    data.set((await response.json()) as Data);
  });

  const routes: Array<[string, string]> = [
    ['/', 'Acceuil'],
    ['cv', 'CV'],
    ['galleries', 'Galleries'],
    ['portfolio', 'Portfolio']
  ];
</script>

<Router>
  <Layout {routes}>
    <Routes />
  </Layout>
</Router>
