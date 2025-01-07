<script lang=ts>
  // @ts-nocheck
  import { colorScheme, slidesCount } from '$lib/store';
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

  let carousel = $state(null);
  
  const debounce = (func, delay) => {
		let timer;

		return function () {
			const context = this;
			const args = arguments;
			clearTimeout(timer);
			timer = setTimeout(() => func.apply(context, args), delay);
		};
	};
	
	const setWindowWidth = () => {    		
    let count = 0
    if (window.innerWidth < 768) {
      count = 1
      } else if (window.innerWidth > 1279) {
        count = 3
      } else {
        count = 2
      }         
      slidesCount.update(v => v = count);
	};	
  

  onMount(() => {		
		window.addEventListener('resize', setWindowWidth);
		
		return () => {
			window.removeEventListener('resize', setWindowWidth);
		}
	});
</script>


<div class="custom-carousel {$colorScheme}" class:images={images}>  
  {#if browser} 
  <Carousel
    bind:this={carousel}
    let:loaded     
    dots={false}    
    particlesToShow={$slidesCount}
    infinite={false}
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