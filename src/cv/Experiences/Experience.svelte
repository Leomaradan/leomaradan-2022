<script lang="ts">
  import {
    Experience,
    ExperienceFreelance,
    isExperienceFreelance,
  } from "../../dataType";
  import ExperienceFreelanceComponent from "./ExperienceFreelance.svelte";
  import ExperienceOrganisation from "./ExperienceOrganisation.svelte";

  export let experience: Experience | ExperienceFreelance;

  const freelance = isExperienceFreelance(experience);

  let component = freelance
    ? ExperienceFreelanceComponent
    : ExperienceOrganisation;
</script>

<svelte:component this={component} {experience} />
