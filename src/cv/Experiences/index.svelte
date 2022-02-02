<script lang="ts">
  import type { Experience, ExperienceFreelance } from "../../dataType";
  import ExperienceComponent from "./Experience.svelte";

  export let experiences: Array<Experience | ExperienceFreelance>;
  export let title: string;
  export let id: string;
</script>

<section {id}>
  <h2>{title}</h2>
  {#each experiences as experience}
    <ExperienceComponent {experience} />
  {/each}
</section>
