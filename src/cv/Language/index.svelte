<script lang="ts">
  export let languages: Array<[string, string]>;
</script>

<section id="languages">
  <h2 itemprop="name">Langues</h2>
  <ul>
    {#each languages as [language, level]}
      <li itemprop="knowsLanguage" itemscope itemtype="https://schema.org/Language">
        <span itemprop="name">{language}</span>
        <span class="level" itemprop="description">{level}</span>
      </li>
    {/each}
  </ul>
</section>

<style>
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .level::before {
    content: '(';
  }

  .level::after {
    content: ')';
  }
</style>
