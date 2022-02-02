<script lang="ts">
  import type { ExperienceFreelance } from "../../dataType";
  import Item from "../Item.svelte";

  export let experience: ExperienceFreelance;

  function getYearDate(time: number) {
    return new Date(experience.startDate).getFullYear();
  }

  const startYear = getYearDate(experience.startDate);
  const endYear = getYearDate(experience.endDate);

  const startDateString = new Date(experience.startDate).toISOString();
  const endDateString = experience.endDate
    ? new Date(experience.endDate).toISOString()
    : "";
  const currentDate = new Date().toISOString();

  const hasSameStartEndDate = startYear === endYear; // Display end date but with a class to hide it
  const hasNoEndDate = experience.endDate === undefined; // Display "Présent"

  const tasks = experience.task;
</script>

<div itemprop="worksFor" itemscope itemtype="https://schema.org/EmployeeRole">
  <h3 itemprop="roleName">{experience.jobTitle}</h3>

  <span>
    <time
      itemprop="startDate"
      content={startDateString}
      datetime={startDateString}>{startYear}</time
    >
    {#if hasNoEndDate}
      -
      <time itemprop="endDate" content={currentDate} datetime={currentDate}
        >Présent</time
      >
    {:else}
      <span class:hasSameStartEndDate>
        <time
          itemprop="endDate"
          content={endDateString}
          datetime={endDateString}>{endYear}</time
        >
      </span>
    {/if}
  </span>

  {#each tasks as task}
    <Item {task} />
  {/each}
</div>

<style>
  .hasSameStartEndDate {
    display: none;
  }
</style>
