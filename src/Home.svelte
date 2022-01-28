<script lang="ts">
  import Label from "./components/Label.svelte";
  import { Link } from "svelte-routing";
</script>

<main>
  <Label title="Home Page" />
  <Link to="cv">CV</Link><br />
  <Link to="gallery">Galleries</Link>
  <Link to="links">Links</Link>
</main>
