<script lang=ts>
  import SmallOrangeCircle from '$lib/assets/images/icons/SmallOrangeCircle.svg';
  import './top-section.css';

  interface TopSectionProps {
    mainHeadline?:string, 
    preHeadeline?:string,  
    headlineHighlight?:string, 
    subHeadline?:string, 
    buttons?:{
      url: string,
      text: string,
      type: string
    }[],
    imgUrl?:string,
    popupBtnUrl?:string,
	}

  let { mainHeadline, preHeadeline,  headlineHighlight, subHeadline, buttons, imgUrl, popupBtnUrl }:TopSectionProps = $props();
</script>

<div class="section top-section">
  <div class="container">
    <div class="row top-section__row">
      <div class="section__content top-section__text">
        {#if preHeadeline}
          <p class="text-simple">
            <img src={SmallOrangeCircle} alt="">
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
      {#if imgUrl}
        <div class="top-section__media">
          <img src={imgUrl} alt="">
          {#if popupBtnUrl}
            <span class="top-section__play-btn"></span>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</div>
  