<script lang=ts>
	import emblaCarouselSvelte from 'embla-carousel-svelte';

  import './carousel.css';
  
  // type EmblaCarouselType = NonNullable<UseEmblaCarouselType[1]>;

  interface Props {
    images?:{
      imgUrl: string
    }[],
    testimonials?:{
      text: string,
      author: string,
      position: string
    }[]
  }

  let { images, testimonials }:Props = $props();
  
</script>
	
<div class="embla" use:emblaCarouselSvelte>
  <div class="embla__container">
    {#if images}
      {#each images as image}
        <div class="embla__slide">
          <img src={image.imgUrl} alt="">
        </div>
      {/each}
    {/if}
    {#if testimonials}
      {#each testimonials as item}
        <div class="embla__slide">
          <p class="font-family">“{item.text}”</p>
          <p>
            <span class="text-semibold">{item.author}</span>
            <span class="text-light">{item.position}</span>
          </p>
        </div>
      {/each}
    {/if}
  </div>

</div>