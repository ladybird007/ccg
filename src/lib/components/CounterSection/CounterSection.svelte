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


  let counts = $state({
      0: false,
      1: false,
      2: false
    })

  function counting(number: number, container: string, fractional: number) {
    let count = 0;
    let counting = setInterval(function(){
      if(count < number) {
        let sum = 0
        if (fractional > 0) {
          sum = count + fractional
        } else {
          sum = count
        }
        container.innerHTML = sum
        count++
      } else {
        clearInterval(counting)
      }
    }, 50);
  }

  function isVisible(elem: string, index: number) {
    const elemTop = elem.offsetTop - (window.innerHeight),
          windowScroll = window.pageYOffset,
          elemChild = elem.querySelector('.counter__number-val'),
          dataNumber = Math.floor(elemChild.getAttribute('data-number'))*1 + 1;
    let dataFractional:nu = ((elemChild.getAttribute('data-number') - Math.floor(elemChild.getAttribute('data-number'))).toFixed(1))*1;

    if (elemTop < windowScroll) {
      if (!counts[index]) {
        counting(dataNumber, elemChild, dataFractional);
        counts[index] = true
      }
    }
  };

  
  onMount(() => {
    window.addEventListener('scroll', function() {
      const counters = document.querySelectorAll('.counter__item');
      counters.forEach((counterEl, index) => {
        isVisible(counterEl, index);
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