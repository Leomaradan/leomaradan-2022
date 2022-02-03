<script lang="ts">
  import Banner from './Banner.svelte';
  import Header from './Header.svelte';
  import Seo from './Seo.svelte';

  /**
   * Bind the header element from Header component, and pass-it to the Banner component
   */
  let header: HTMLElement;

  export let routes: Array<[string, string]>;
</script>

<Seo />
<Header bind:header {routes} />

<div class="background" />
<div class="wrapper">
  <Banner {header} />

  <slot />
</div>

<style lang="less">
  @import '../style.less';

  .background {
    width: 100%;
    position: fixed;
    height: 50px;
    background-color: rgba(var(--dark-values), 0.4); //fade(@darkColor, 40%);
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

  @media print {
    .background {
      display: none;
    }
  }
</style>
