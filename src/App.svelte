<script type="ts">
  import Router from './routes/index.svelte';
  import { onMount } from 'svelte';
  import { data } from './stores';
  import type { Data } from './dataType';
  import Seo from './components/Seo.svelte';

  onMount(async () => {
    const response = await fetch('/data.json');
    data.set((await response.json()) as Data);
  });
</script>

<Seo />
<Router />
