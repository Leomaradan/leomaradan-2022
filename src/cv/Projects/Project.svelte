<script lang="ts">
  import { marked } from 'marked';

  import type { Project } from '../../dataType';

  export let project: Project;

  $: tasks = project.task;
</script>

<div itemprop="contributor" itemscope itemtype="https://schema.org/Project">
  <h3 itemprop="name">{project.name}</h3>
  {#if project.description}
    <p itemprop="description">{@html marked(project.description)}</p>
  {/if}

  <ul>
    {#each tasks as task}
      <li>{@html marked(task)}</li>
    {/each}
  </ul>
</div>

<style>
  li {
    margin-left: 3rem;
  }
</style>
