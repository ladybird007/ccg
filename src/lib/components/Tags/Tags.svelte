<script lang=ts>
  import './tags.css';

  interface Props {
    tagsColor?: string,
    tags: {
      text: string
      url: string,
    }[]
  }

  let { tagsColor = 'grey', tags }:Props = $props();
</script>

<div class="tags {tagsColor}">
  {#each tags as tag}
    <a href={tag.url} class="tag">{tag.text}</a>
  {/each}
</div>
