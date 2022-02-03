<script lang="ts">
  import { cvStore, seo } from '../stores';

  import Projects from './Projects/index.svelte';
  import Info from './Info/index.svelte';
  import Experiences from './Experiences/index.svelte';
  import Courses from './Courses/index.svelte';
  import Languages from './Language/index.svelte';
  import Recreations from './Recreation/index.svelte';
  import Skills from './Skills/index.svelte';

  $: courses = $cvStore.course;
  $: educations = $cvStore.education;
  $: experiences = $cvStore.experience;
  $: info = $cvStore.info;
  $: languages = $cvStore.languages;
  $: projects = $cvStore.projects;
  $: recreations = $cvStore.recreation;
  $: skillsCategories = $cvStore.skills;

  $seo = {
    title: 'Curriculum Vitae',
    description: 'Curriculum Vitae de Léo Maradan'
  };

  // $page = 'cv';
</script>

<section itemscope itemtype="http://schema.org/Person" class="cv">
  <div class="head">
    <h1 itemprop="name" id="name">
      <span itemprop="givenName">Léo</span>
      <span itemprop="familyName">Maradan</span>
    </h1>
    <div itemprop="jobTitle" id="title" class="heading-style">Développeur Web</div>
    <img src="img/portrait.jpg" alt="Portrait de Léo Maradan" itemprop="image" />
  </div>
  <div class="info">
    <Info {info} />
  </div>

  <div class="experience">
    <Experiences id="experience" title="Expérience" {experiences} />
  </div>
  <div class="course"><Courses id="course" title="Stages" {courses} /></div>
  <div class="education">
    <Courses id="education" title="Formation" courses={educations} />
  </div>
  <div class="language"><Languages {languages} /></div>
  <div class="project"><Projects {projects} /></div>
  <div class="recreation"><Recreations {recreations} /></div>
  <div class="skills"><Skills {skillsCategories} /></div>
</section>

<style lang="less">
  @areas: info, experience, skills, education, project, course, language, recreation;
  .cv {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas: 'head head' 'info experience' 'skills experience' 'education project' 'course project' 'language project' 'recreation project';
  }

  .head {
    grid-area: head;
    display: flex;
    align-items: center;

    h1 {
      display: none;
    }

    img {
      max-height: 15rem;
    }
  }

  each(@areas, {
    .@{value} {
      grid-area: @value;
      border: 5px solid black;
    }
});

  @media print {
    h1 {
      display: block !important;
    }
  }
</style>
