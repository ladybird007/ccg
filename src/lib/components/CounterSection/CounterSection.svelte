<script lang=ts>
  import './counter-section.css';

  interface Props {
    sectionClass?: string,
    preHeadeline?: string,  
    mainHeadline?: string, 
    mainText?: string, 
    numbers?:{
      number?: number,
      suffix?: string, 
      text?: string,
    }[]
	}

  let { sectionClass, preHeadeline, mainHeadline,  mainText, numbers }:Props = $props();
</script>

<div class="section {sectionClass}">
  <div class="container">
    <div class="counter">
      <div class="counter__text section__content">
        {#if preHeadeline}
          <p class="text-simple pre-headline">
            {preHeadeline}
          </p>
        {/if}
        {#if mainHeadline}
          <h2>
            {@html mainHeadline}
          </h2>
        {/if}
        {#if mainText}
          <p class="text-callout">
            {@html mainText}
          </p>
        {/if}
      </div>
      {#if numbers}
        <div class="counter__numbers">
          {#each numbers as item}
            <div class="counter__item">
              <div class="counter__number">
                {item.number}
                {item.suffix}
              </div>
              <p class="text-simple">
                {item.text}
              </p>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>