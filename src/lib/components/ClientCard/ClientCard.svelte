<script lang=ts>
  import type { Component } from 'svelte';
  import Tags from '../Tags/Tags.svelte';

  import './client-card.css';

  import BlogArrow from '$lib/assets/images/icons/BigArrow.svelte';

  interface Props {
    class?:string,
    imgUrl?:string,
    logo?:Component,
    headline?:string, 
    tags?:{
      type:string,
      url:string,
      text:string
    }[]
  }

  let cards:Props = $props();
</script>
  
<div class="client-card {cards.class}">
  {#if cards.imgUrl}
    <div class="client-card__banner">
      <img src={cards.imgUrl} alt={cards.headline}>
      <div class="client-card__logo-wrap">
        <span class="client-card__logo">
          <cards.logo />
        </span>
        <span class="client-card__arrow">
          <BlogArrow />
        </span>
      </div>
    </div>
  {/if}

  <div class="client-card__content">
    {#if cards.headline}
      <h3 class="client-card__title">
        {cards.headline}
      </h3>
    {/if}
  </div>

  {#if cards.tags}
    <div class="client-card__tags">
      <Tags tags={cards.tags} />
    </div>
  {/if}
</div>
  