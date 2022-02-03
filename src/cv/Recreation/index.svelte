<script lang="ts">
  export let recreations: string[];
</script>

<section id="recreation" itemscope itemtype="http://schema.org/ItemList">
  <h2 itemprop="name">Loisirs</h2>
  <ul>
    {#each recreations as recreation}
      <li itemprop="itemListElement">{recreation}</li>
    {/each}
  </ul>
</section>

<style>
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
</style>
