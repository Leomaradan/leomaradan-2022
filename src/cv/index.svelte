<script lang="ts">
  import type { CV } from "../dataType";
  import { cvStore } from "../stores";

  import Projects from "./Projects/index.svelte";
  import Info from "./Info.svelte";
  import Experiences from "./Experiences/index.svelte";
  import Courses from "./Courses/index.svelte";

  let sections: CV;

  cvStore.subscribe((cv) => {
    sections = cv as CV;
  });

  $: courses = sections.course ?? [];
  $: educations = sections.education ?? [];
  $: experiences = sections.experience ?? [];
  $: info = sections.info ;
  $: languages = sections.languages ?? [];
  $: projects = sections.projects ?? [];
  $: recreations = sections.recreation ?? [];
  $: skillsCategories = sections.skills ?? [];
</script>

<section itemscope itemtype="http://schema.org/Person">
  <h1 itemprop="name">
    <span itemprop="givenName">Léo</span>
    <span itemprop="familyName">Maradan</span>
  </h1>
  <div itemprop="jobTitle">Développeur Web</div>
  {#if info}<Info {info} />{/if}
  <Experiences id="experience" title="Expérience" {experiences} />
  <Courses id="course" title="Stages" {courses} />
  <Courses id="education" title="Formation" courses={educations} />
  <section id="languages">
    <ul>
      {#each languages as [language, level]}
        <li
          itemprop="knowsLanguage"
          itemscope
          itemtype="https://schema.org/Language"
        >
          <span itemprop="name">{language}</span>
          <span itemprop="description">{level}</span>
        </li>
      {/each}
    </ul>
  </section>
  <Projects {projects} />

  <section id="recreation" itemscope itemtype="http://schema.org/ItemList">
    <h2 itemprop="name">Loisirs</h2>
    <ul>
      {#each recreations as recreation}
        <li itemprop="itemListElement">{recreation}</li>
      {/each}
    </ul>
  </section>
  <section id="skills" itemscope itemtype="http://schema.org/ItemList">
    <h2 itemprop="name">Skills</h2>
    {#each skillsCategories as { skills, title }}
      <h3>{title}</h3>
      <ul>
        {#each skills as skill}
          <li itemprop="itemListElement">{skill}</li>
        {/each}
      </ul>
    {/each}
  </section>
</section>
