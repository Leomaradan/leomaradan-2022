<script lang="ts">
  import type { Course } from "../../dataType";
  import CourseComponent from "./Course.svelte";

  export let courses: Course[];
  export let title: string;
  export let id: string;
</script>

<section {id}>
  <h2>{title}</h2>
  {#each courses as course}
    <CourseComponent {course} />
  {/each}
</section>
