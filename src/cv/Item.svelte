<script lang="ts">
  import { marked } from "marked";

  export let task: string;
</script>

<li>{@html marked(task)}</li>
