<script lang='ts'>
  import { popopVisible } from '$lib/store';
  import { onMount } from 'svelte';
  import ScrollButton from '../ScrollButton/ScrollButton.svelte';
  import './top-section.css';

  interface Props {
    mainHeadline?: string, 
    preHeadeline?: string,  
    headlineHighlight?: string, 
    subHeadline?: string, 
    buttons?: {
      url: string,
      text: string,
      type: string
    }[],
    posterUrl?: string,
    videoUrl?: string,
    popupBtn?: boolean,
    popupBtnMobile?: boolean,
    scrollBtn?: boolean
	}

  let { mainHeadline, preHeadeline,  headlineHighlight, subHeadline, buttons, posterUrl, videoUrl, popupBtn, popupBtnMobile, scrollBtn }:Props = $props();

  function showPopupHandler() {
    popopVisible.update(v => v = true);
  }

  onMount(() => {
    const video = document.getElementById("bg-video");

    if(video) {
      setTimeout(function() {
        video.play();
      }, 500);
    }
  })

</script>

<div class="top-section section">
  <div class="container">
    <div class="row top-section__row">
      <div class="section__content top-section__text">
        {#if preHeadeline}
          <p class="text-simple pre-headline">
            {preHeadeline}            
          </p>
        {/if}
        {#if mainHeadline}
          <h1>
            {mainHeadline}
            {#if headlineHighlight}
              <span class="headline-highlight">{headlineHighlight}</span>
            {/if}
          </h1>
        {/if}
        {#if subHeadline}
          <p class="text-emphasis">
            {subHeadline}
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
      {#if posterUrl}
        <div class="top-section__media">
          {#if popupBtn}
            <img src={posterUrl} alt="">
            <button class="top-section__play-btn" onclick={showPopupHandler} aria-label="button"></button>
          {:else}
            {#if popupBtnMobile}
              <div class="tablet-visible">
                <img src={posterUrl} alt="">
                <button class="top-section__play-btn" onclick={showPopupHandler} aria-label="button"></button>
              </div>
              <div class="top-section__video tablet-hidden">
                <video id="bg-video" width="100%" poster={posterUrl} muted loop>
                  <source src={videoUrl} type="video/mp4" />
                </video> 
              </div>
            {:else}
              <div>
                <img src={posterUrl} alt="">
              </div>
            {/if}
          {/if}
        </div>
      {/if}
    </div>
    {#if scrollBtn}
      <ScrollButton />
    {/if}
  </div>
</div>