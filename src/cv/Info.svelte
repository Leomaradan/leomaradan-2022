<script lang="ts">
  import type { CV } from "../dataType";

  export let info: CV["info"];

  const age = new Date().getFullYear() - new Date(1986, 4, 19).getFullYear();
</script>

<section id="personal-details">
  <h2>Informations</h2>
  <h3>Coordonnées</h3>
  <dl itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
    <dt>Adresse</dt>
    <dd itemprop="streetAddress">{info.streetAddress}</dd>
    <dt>Code postal</dt>
    <dd itemprop="postalCode">{info.postalCode}</dd>
    <dt>Ville</dt>
    <dd itemprop="addressLocality">{info.addressLocality}</dd>
  </dl>
  <dl>
    <dt>Téléphone</dt>
    <dd><a itemprop="telephone" href="tel:+41763993572">076 399 35 72</a></dd>
    <dt>E-Mail</dt>
    <dd>
      <a itemprop="email" href="mailto:leo@leomaradan.com">leo@leomaradan.com</a
      >
    </dd>
  </dl>

  <h3>Web</h3>
  <ul id="links">
    {#each info.weblinks as link}
      <li><a itemprop="url" rel="me" href={link[1]}>{link[0]}</a></li>
    {/each}
  </ul>
  <h3>Autres informations</h3>
  <dl>
    <dt>Age</dt>
    <dd>{age} ans (15.05.1986)</dd>
    <dt>Nationalité</dt>
    <dd>Suisse</dd>
    <dt>Véhicule</dt>
    <dd>Permis Voiture (B)</dd>
    <dt>Service Militaire</dt>
    <dd>terminé</dd>
  </dl>
</section>
