<script lang=ts>
  // @ts-nocheck
  import { slidesCount } from '$lib/store';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Carousel from "svelte-carousel";  

  import './carousel.css';

  interface Props {
    images?:{
      url: string
    }[],
    testimonials?:{
      text: string,
      author: string,
      position: string
    }[]
  }

  let { images, testimonials }:Props = $props();    

  let carousel;  		 
</script>


<div class="custom-carousel" class:images={images}>  
  {#if browser} 
  <Carousel
    bind:this={carousel}
    let:loaded     
    dots={false}    
    particlesToShow={$slidesCount}
  > 
    {#if images}
      {#each images as image}
        <div class="slide">
          <div class="slide__img">
            <img src={image.url} alt='' />
          </div>
        </div>
      {/each}
    {/if}
    {#if testimonials}
      {#each testimonials as item}
        <div class="slide">
          <p class="text-family">“{item.text}”</p>
          <p class="slide__meta">
            <span class="text-semibold">{item.author}</span>
            <span class="text-light text-grey">{item.position}</span>
          </p>
        </div>
      {/each}
    {/if}
    </Carousel>  
  {/if}
</div>