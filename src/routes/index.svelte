<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import CV from '../cv/index.svelte';
  import Home from '../Home.svelte';
  import Galleries from '../galleries/index.svelte';
  import Gallery from '../galleries/Gallery.svelte';
  import Picture from '../galleries/Picture.svelte';
  import Links from '../links/index.svelte';
  import Header from '../components/Header.svelte';
  import Banner from '../components/Banner.svelte';

  export let url = '';

  let horizontalMenu: HTMLElement;

  const routes: Array<[string, string]> = [
    ['cv', 'CV'],
    ['galleries', 'Galleries'],
    ['links', 'Liens']
  ];
</script>

<Router {url}>
  <Header bind:horizontalMenu {routes} />

  <div class="background" />
  <div class="wrapper">
    <Banner horizontaleMenu={horizontalMenu} />

    <Route path="cv" component={CV} />
    <Route path="gallery/:gallery/:photo" let:params
      ><Picture galleryId={params.gallery} pictureId={params.photo} /></Route
    >
    <Route path="gallery/:gallery" let:params
      ><Gallery galleryId={params.gallery} /></Route
    >
    <Route path="gallery" component={Galleries} />
    <Route path="links" component={Links} />
    <Route path="/" component={Home} />
  </div>
</Router>

<style lang="less">
  @import '../style.less';

  .background {
    width: 100%;
    position: fixed;
    height: 50px;
  }

  .background {
    background-color: fade(@darkColor, 40%);
    z-index: 9;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: @small-breakpoint) {
    .background {
      display: none;
    }
  }
</style>
