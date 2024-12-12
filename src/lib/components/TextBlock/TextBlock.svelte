<script lang=ts>
  import SmallOrangeCircle from '$lib/assets/images/icons/SmallOrangeCircle.svg';

  interface TextBlockProps {
    mainHeadline?:string, 
    preHeadeline?:string,  
    mainText?:string, 
    buttons?:{
      url: string,
      text: string,
      type: string
    }[]
	}

  let { mainHeadline, preHeadeline, mainText, buttons }:TextBlockProps = $props();

  import './text-block.css';
</script>

<div class="section__content">
  {#if preHeadeline}
    <p class="text-simple">
      <img src={SmallOrangeCircle} alt="">
      {preHeadeline}
    </p>
  {/if}
  {#if mainHeadline}
    <h2>
      {mainHeadline}
    </h2>
  {/if}
  {#if mainText}
    <p class="text-emphasis">
      {mainText}
    </p>
  {/if}
  {#if buttons}
    <div class="buttons">
      {#each buttons as button}
        <a href={button.url} class="btn btn--{button.type}">{@html button.text}</a>
      {/each}
    </div>
  {/if}
</div>