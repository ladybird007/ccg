<script lang="ts">
  import Tags from '../Tags/Tags.svelte';

  interface Props {
    title?: string,
    author?: {
      name?: string,
      url?: string
    },
    meta?: {
      date?: string,
      time?: string,
    },
    tagsData?: {
      tagsColor?: string,
      tags?: {
        text: string,
        url: string
      }[]
    }
  }

  let { title, author, meta, tagsData }:Props = $props();
</script>

<div class="section section--light-grey">
  <div class="container container--small section__content">
    {#if tagsData}
      <Tags tags={tagsData.tags} tagsColor={tagsData.tagsColor} />
    {/if}
    <h1>{title}</h1>
    <div class="post-meta">
      {#if author}
        <span>by <a href={author.url}>{author.name}</a></span>
      {/if}
      {#if meta.date}
        <span class="text-grey text-light">{meta.date}</span>
      {/if}
      {#if meta.time}
        <span class="text-grey text-light">{meta.time}</span>
      {/if}
    </div>
  </div>
</div>