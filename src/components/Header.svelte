<script lang="ts">
  import { link } from 'svelte-routing';

  export let routes: Array<[string, string]>;
  export let horizontalMenu: HTMLElement;
</script>

<header bind:this={horizontalMenu}>
  <nav>
    <div class="icon" />
    <input type="checkbox" />
    <ul>
      {#each routes as [url, text]}
        <li>
          <a href={url} use:link>{text}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="less">
  @import '../style.less';

  header {
    width: 100%;
    position: fixed;
    height: 50px;
    z-index: 100;
    border-bottom: 1px solid fade(@lightColor, 75%);
  }

  .icon,
  input {
    top: -26px;
    position: relative;
    height: 32px;
    width: 32px;
    display: none;
    @media (max-width: @small-breakpoint) {
      display: block;
    }
  }
  input {
    opacity: 0;
    left: 22px;
  }

  input:checked + ul {
    transform: translateX(0);
  }

  .icon {
    background-color: rgba(0, 0, 0, 0.2);

    left: 26px;
    top: 9px;

    border-radius: 2px;
    border: 1px solid fade(@lightColor, 75%);

    cursor: pointer;

    &:after {
      left: 5px;
      content: '';
      position: absolute;
      display: block;
      width: 2rem;
      height: 0;
      box-shadow: 0 8px 0 1px @lightColor, 0 15px 0 1px @lightColor,
        0 22px 0 1px @lightColor;
    }
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: @lightColor;
    padding: 0 0.8rem;
    position: relative;

    &:hover {
      color: @lightColor;
      &:before {
        left: 0;
        right: 0;
      }
    }

    &:before {
      background: fade(@lightColor, 75%);
      height: 2px;
      content: '';
      position: absolute;
      z-index: -1;
      left: 50%;
      right: 50%;
      bottom: 0;
      transition-property: left, right;
      transition-duration: 0.2s;
      transition-timing-function: ease-out;
    }
  }

  ul {
    list-style: none;
    justify-content: center;
    display: flex;
  }
</style>
