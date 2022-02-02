<script lang="ts">
  import type { Course } from '../../dataType';

  export let course: Course;

  function getYearDate(time: number) {
    return new Date(time).getFullYear();
  }

  const startYear = getYearDate(course.startDate);
  const endYear = course.endDate ? getYearDate(course.endDate) : 0;

  // $: timeRange = getTimeRange(experience.startDate, experience.endDate);
  const organisationName = course.organisationName;

  const startDateString = new Date(course.startDate).toISOString();
  const endDateString = course.endDate ? new Date(course.endDate).toISOString() : '';
  const currentDate = new Date().toISOString();

  const hasSameStartEndDate = startYear === endYear; // Display end date but with a class to hide it
  const hasNoEndDate = course.endDate === undefined; // Display "Présent"
</script>

<div itemprop="alumniOf" itemscope itemtype="https://schema.org/OrganizationRole">
  <link itemprop="additionalType" href="https://schema.org/Organization" />
  <h3 itemprop="roleName">{course.jobTitle}</h3>
  <span>
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
  <div
    itemprop="alumniOf"
    itemscope
    itemtype="https://schema.org/EducationalOrganization"
  >
    <span itemprop="name">{organisationName}</span>

    <span itemprop="location" itemscope itemtype="http://schema.org/Place">
      <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <span itemprop="addressLocality">{course.location}</span>
      </span>
    </span>
  </div>
</div>

<style>
  .hasSameStartEndDate {
    display: none;
  }
</style>
