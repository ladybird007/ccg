<script lang=ts>
  import './team-card.css';

  import BlogArrow from '$lib/assets/images/icons/BigArrow.svelte';

  interface Props {
    class?: string,
    imgUrl?: string,
    name?: string, 
    position?: string
    link?: string
  }

  let card:Props = $props();
</script>
  
<a href={card.link} class="team-card {card.class}">
  {#if card.imgUrl}
    <div class="team-card__photo">
      <img src={card.imgUrl} alt={card.name}>
      <div class="team-card__details">
        <span class="text-simple">View Details</span>
        <span class="team-card__arrow">
          <BlogArrow />
        </span>
      </div>
    </div>
  {/if}

  <div class="team-card__content">
    {#if card.name}
      <h3 class="team-card__name">
        {card.name}
      </h3>
    {/if}
    {#if card.position}
      <p class="text-simple team-card__position">
        {card.position}
      </p>
    {/if}
  </div>
</a>
  