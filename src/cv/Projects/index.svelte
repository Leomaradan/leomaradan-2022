<script lang="ts">
  import type { Project } from '../../dataType';
  import ProjectComponent from './Project.svelte';

  export let projects: Project[];
</script>

<section id="project">
  <h2>Projets</h2>
  {#each projects as project}
    <ProjectComponent {project} />
  {/each}
</section>
