<script lang="ts">
  const minmax = (value: number, min?: number, max?: number) => {
    if (min == undefined) {
      return value;
    }

    // 75, 80 => min(75, 80) = 75
    if (max == undefined) {
      return Math.min(min, value);
    }
    // 0.5, 0, 1 => max(0, min(1, 0.5))
    return Math.max(min, Math.min(max, value));
  };

  let innerHeight: number;
  let title: HTMLDivElement;
  export let horizontaleMenu: HTMLElement;

  const fixedNavbar = () => {
    const position = innerHeight;
    const positionBottom = position - horizontaleMenu.clientHeight;

    if (window.scrollY > positionBottom) {
      horizontaleMenu.classList.add('Scroll');
    }
    if (window.scrollY < positionBottom + 1) {
      horizontaleMenu.classList.remove('Scroll');
    }

    if (window.matchMedia('(min-width: 600px)').matches) {
      // fade 50% -> 75%
      const relativeScroll = (100 / position) * window.scrollY;

      const titlePosition = minmax((40 / 75) * relativeScroll + 35, 80);

      const titleOpacity = minmax(1 - relativeScroll / 75, 0, 1); // (5-Math.min(5,Math.max(,0)))/5;

      title.style.top = `${titlePosition}%`;
      title.style.opacity = String(titleOpacity);
    } else {
      title.style.top = '0';
    }
  };
</script>

<svelte:window on:scroll={fixedNavbar} />

<div class="banner" bind:clientHeight={innerHeight}>
  <div
    class="parallax-window"
    data-parallax="scroll"
    data-image-src="img/cover.jpg"
    data-z-index="10"
  />
  <h1 bind:this={title}>Léo Maradan</h1>
</div>

<style lang="less">
  @import '../style.less';

  .banner {
    position: relative;
  }

  h1 {
    width: 100%;
    text-align: center;
    top: 35%;
    position: absolute;
    z-index: 15;
    font-family: @font-cursive;
    font-size: 6rem;
    color: @lightColor;
  }

  .parallax-window {
    height: 651px;
  }

  @media (max-width: @small-breakpoint) {
    h1 {
      font-size: 1.5rem;
      top: 0;
    }
  }
</style>
