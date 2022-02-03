<script lang="ts">
  import { marked } from 'marked';

  import type { Experience } from '../../dataType';
  import Item from '../Item.svelte';

  export let experience: Experience;

  function getYearDate(time: number) {
    return new Date(time).getFullYear();
  }

  const startYear = getYearDate(experience.startDate);
  const endYear = experience.endDate ? getYearDate(experience.endDate) : 0;

  // $: timeRange = getTimeRange(experience.startDate, experience.endDate);
  const organisationName = experience.organisationName;

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
  <link itemprop="additionalType" href="https://schema.org/Organization" />
  <h3 itemprop="roleName">{experience.jobTitle}</h3>
  <span itemprop="name" class="organisationName">{organisationName}</span>

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

  <span itemprop="location" itemscope itemtype="http://schema.org/Place" class="location">
    <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      <span itemprop="addressLocality">{experience.location}</span>
    </span>
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto 1fr;
  }

  .organisationName {
    grid-column: 2;
    grid-row: 1;
  }

  .range {
    grid-column: 1;
    grid-row: 1;
  }

  .location {
    grid-column: 3;
    grid-row: 1;
  }

  h3 {
    grid-column: 2 / -1;
    grid-row: 2;
  }

  ul {
    grid-column: 2 / -1;
    grid-row: 3;
  }

  .hasSameStartEndDate {
    display: none;
  }
</style>
