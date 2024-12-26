<script lang="ts">
  import { onMount } from 'svelte';
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


  function counting(val, container) {
    let count = 0;
    let counting = setInterval(function(){
      if(count < val) {
        container.innerHTML = count
        count++
      } else {
        clearInterval(counting)
      }
    }, 10);
  }

  function isVisible(elem) {
    const elemTop = elem.offsetTop - (window.innerHeight / 2),
          windowScroll = window.pageYOffset,
          elemChild = elem.querySelector('.counter__number-val'),
          dataNumber = elemChild.getAttribute('data-number')*1 + 1;
    let counterVal = 0;

    if (elemTop < windowScroll) {
      counterVal = counting(dataNumber, elemChild);
    }
  };

  onMount(() => {
    window.addEventListener('scroll', function() {
      const counters = document.querySelectorAll('.counter__item');
      counters.forEach((counterEl) => {
        isVisible(counterEl);
      })
      
    });
  })

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
                <span class="counter__number-val" data-number={item.number}>0</span>
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