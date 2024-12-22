<script lang=ts>
  // @ts-nocheck
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Carousel from "svelte-carousel";

  import './carousel.css';
  
  // type EmblaCarouselType = NonNullable<UseEmblaCarouselType[1]>;

  interface Props {
    slideToshow: number,
    slideToshowTablet?: number,
    slideToshowMobile?: number,
    images?:{
      imgUrl: string
    }[],
    testimonials?:{
      text: string,
      author: string,
      position: string
    }[]
  }

  let { images, testimonials, slideToshow }:Props = $props();

  let carousel; 
</script>



<div class="custom-carousel">
  {#if browser}
  <Carousel
    bind:this={carousel}
    let:loaded     
    dots={false}
    particlesToShow={slideToshow}
  > 
    {#if images}
      {#each images as image}
        <div class="slide">
          {#if loaded.includes(imageIndex)}
            <img src={src.url} alt='' />
          {/if}
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