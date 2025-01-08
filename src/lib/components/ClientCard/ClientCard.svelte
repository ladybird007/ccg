<script lang=ts>
  import type { Component } from 'svelte';
  import Tags from '../Tags/Tags.svelte';

  import './client-card.css';

  import BlogArrow from '$lib/assets/images/icons/BigArrow.svelte';

  interface Props {
    class?: string,
    imgUrl?: string,
    videoUrl?: string,
    logo?: Component,
    headline?: string, 
    tags?:{
      url: string,
      text: string
    }[]
  }

  let cards:Props = $props();
</script>
  
<div class="client-card {cards.class}">
  
  <div class="client-card__banner">
    {#if cards.videoUrl} 
      <div class="client-card__video">
        <video width="100%" height="100%" poster={cards.imgUrl} muted loop autoplay>
          <source src={cards.videoUrl} type="video/mp4" />
        </video> 
      </div>
    {:else if cards.imgUrl}
      <img src={cards.imgUrl} alt={cards.headline}>
    {/if}
    <div class="client-card__logo-wrap">
      <span class="client-card__logo">
        <cards.logo />
      </span>
      <span class="client-card__arrow">
        <BlogArrow />
      </span>
    </div>
  </div>

  <div class="client-card__content">
    {#if cards.headline}
      <div>
        <h3 class="client-card__title">
          {cards.headline}
        </h3>
      </div>
    {/if}
  </div>

  {#if cards.tags}
    <div class="client-card__tags">
      <Tags tags={cards.tags} />
    </div>
  {/if}
</div>
  