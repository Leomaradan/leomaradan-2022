<script lang="ts">
  import { marked } from 'marked';

  import type { ExperienceFreelance } from '../../dataType';
  import Item from '../Item.svelte';

  export let experience: ExperienceFreelance;

  function getYearDate(time: number) {
    return new Date(time).getFullYear();
  }

  const startYear = getYearDate(experience.startDate);
  const endYear = experience.endDate ? getYearDate(experience.endDate) : 0;

  const startDateString = new Date(experience.startDate).toISOString();
  const endDateString = experience.endDate
    ? new Date(experience.endDate).toISOString()
    : '';
  const currentDate = new Date().toISOString();

  const hasSameStartEndDate = startYear === endYear; // Display end date but with a class to hide it
  const hasNoEndDate = experience.endDate === undefined; // Display "Présent"

  const tasks = experience.task;
</script>

<div
  itemprop="worksFor"
  itemscope
  itemtype="https://schema.org/EmployeeRole"
  class="item"
>
  <h3 itemprop="roleName">{experience.jobTitle}</h3>

  <span class="range">
    <time itemprop="startDate" content={startDateString} datetime={startDateString}
      >{startYear}</time
    >
    {#if hasNoEndDate}
      -
      <time itemprop="endDate" content={currentDate} datetime={currentDate}>Présent</time>
    {:else}
      <span class:hasSameStartEndDate>
        <time itemprop="endDate" content={endDateString} datetime={endDateString}
          >{endYear}</time
        >
      </span>
    {/if}
  </span>

  <ul>
    {#each tasks as task}
      <li>{@html marked(task)}</li>
    {/each}
  </ul>
</div>

<style>
  .item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr;
    /* grid-template-areas: 'date title' 'content content'; */
  }

  h3 {
    grid-column: 2;
    grid-row: 1;
  }

  .range {
    grid-column: 1;
    grid-row: 1;
  }

  ul {
    grid-column: 1 / -1;
    grid-row: 2;
  }

  li {
    margin-left: 3rem;
  }

  .hasSameStartEndDate {
    display: none;
  }
</style>
