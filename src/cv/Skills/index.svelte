<script lang="ts">
  import type { SkillCategory } from '../../dataType';

  export let skillsCategories: SkillCategory[];
</script>

<section id="skills" itemscope itemtype="http://schema.org/ItemList">
  <h2 itemprop="name">Skills</h2>
  {#each skillsCategories as { skills, title }}
    <h3>{title}</h3>
    <ul>
      {#each skills as skill}
        <li itemprop="itemListElement">{skill}</li>
      {/each}
    </ul>
  {/each}
</section>

<style lang="less">
  li {
    display: inline;
    &:not(:first-child)::before {
      content: ', ';
    }
  }
</style>
