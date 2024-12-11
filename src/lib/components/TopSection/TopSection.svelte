<script>
  import SmallOrangeCircle from '$lib/assets/images/icons/SmallOrangeCircle.svg';

  let { mainHeadline, preHeadeline,  headlineHighlight=null, subHeadline, buttons=null, imgUrl } = $props();
</script>

<div class="top-section section">
  <div class="container">
    <div class="row">
      <div class="section__content">
        {#if preHeadeline}
          <p class="simple-text">
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
              <a href={button.url} class="btn btn--{button.type}">{button.text}</a>
            {/each}
          </div>
        {/if}
      </div>
      {#if imgUrl}
        <div class="top-section__media">
          <img src={imgUrl} alt="">
        </div>
      {/if}
    </div>
  </div>
</div>
  