<script lang=ts>
  import './tags.css';

  interface Props {
    tags: {
      type: string,
      text: string
      url: string,
    }[]
  }

  let { tags }:Props = $props();
</script>

<div class="tags">
  {#each tags as tag}
    <a href={tag.url} class="tag tag--{tag.type}">{tag.text}</a>
  {/each}
</div>
