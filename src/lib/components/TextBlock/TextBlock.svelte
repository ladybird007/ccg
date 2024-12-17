<script lang=ts>
  import SmallOrangeCircle from '$lib/assets/images/icons/SmallOrangeCircle.svg';
  import './text-block.css';

  interface Props {
    preHeadeline?:string,  
    mainHeadline?:string, 
    mainText?:string, 
    buttons?:{
      url: string,
      text: string,
      type: string
    }[]
	}

  let { mainHeadline, preHeadeline, mainText, buttons }:Props = $props();
</script>

<div class="section__content text-block">
  {#if preHeadeline}
    <p class="text-simple in-line">
      <img src={SmallOrangeCircle} alt="">
      {preHeadeline}
    </p>
  {/if}
  {#if mainHeadline}
    <h2>
      {@html mainHeadline}
    </h2>
  {/if}
  {#if mainText}
    <p class="text-emphasis">
      {@html mainText}
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