<script lang=ts>
  import type { Component } from 'svelte';

  import './team-card.css';

  import BlogArrow from '$lib/assets/images/icons/BigArrow.svelte';

  interface Props {
    class?:string,
    imgUrl?:string,
    name?:string, 
    position?:string
    link?:string
  }

  let cards:Props = $props();
</script>
  
<div class="team-card {cards.class}">
  {#if cards.imgUrl}
    <div class="team-card__photo">
      <img src={cards.imgUrl} alt={cards.name}>
      <div class="team-card__details">
        <span class="text-simple">View Details</span>
        <span class="team-card__arrow">
          <BlogArrow />
        </span>
      </div>
    </div>
  {/if}

  <div class="team-card__content">
    {#if cards.name}
      <h3 class="team-card__name">
        {cards.name}
      </h3>
    {/if}
    {#if cards.position}
      <p class="text-simple team-card__position">
        {cards.position}
      </p>
    {/if}
  </div>
</div>
  