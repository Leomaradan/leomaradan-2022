<script lang="ts">
  import type { Project } from '../../dataType';
  import Item from '../Item.svelte';

  export let project: Project;

  $: tasks = project.task;
</script>

<div itemprop="contributor" itemscope itemtype="https://schema.org/Project">
  <h3 itemprop="name">{project.name}</h3>
  <p itemprop="description">{project.description}</p>
  {#each tasks as task}
    <Item {task} />
  {/each}
</div>
