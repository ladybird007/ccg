<script lang=ts>
  import Button from '$lib/components/Button/Button.svelte';
  import './text-block.css';

  interface Props {
    preHeadeline?: string,  
    mainHeadline?: string, 
    mainText?: string, 
    buttons?: {
      url: string,
      text: string,
      type: string
    }[]
	}

  let { mainHeadline, preHeadeline, mainText, buttons }:Props = $props();
</script>

<div class="section__content text-block">
  {#if preHeadeline}
    <p class="text-simple pre-headline">
      {preHeadeline}
    </p>
  {/if}
  <div>
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
  </div>
  {#if buttons}
    <div class="buttons">
      {#each buttons as button}
        <Button
          text={button.text}
          link={button.url}
          typeClass={button.type}
        />
      {/each}
    </div>
  {/if}
</div>