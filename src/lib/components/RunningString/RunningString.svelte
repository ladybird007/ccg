<script lang=ts>
  import { onMount } from 'svelte';
  import './running-string.css';

  interface Props {
    runningText?: string
  }
  let  { runningText }: Props = $props();



  let lastScrollTop = 0;

  function move() {
    const elem = document.querySelector('.running-string__inner');
    let elemIndex = 0,
          elemStep = 3,
          elemWidth = elem.clientWidth + 1;

    elemIndex = elemIndex < elemWidth ? elemIndex + elemStep : 1;

    // console.log(elemWidth)


    // elem.style.transform = `translateX(-${elemIndex}px)`;
    
  }

  function isVisible(elem) {
    let windowScroll = window.pageYOffset;
    let position = elem.getBoundingClientRect();

    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      elem.classList.add('visible');
      
      /*let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // console.log('down');
      } else if (st < lastScrollTop) {
        // console.log('up')
      }
      lastScrollTop = st <= 0 ? 0 : st;*/

      elem.querySelector('.running-string__inner').style.transform = `translateX(-${windowScroll}px)`;
    } else {
      elem.classList.remove('visible');
    }
  };
  

  onMount(() => {

    let didScroll = false;

    window.addEventListener('scroll', function() {
      didScroll = true;

      const RunningString = document.querySelectorAll('.running-string');
      RunningString.forEach((arrItem) => {
        isVisible(arrItem);
      });

    }, false);
    
    const runStringInner = document.querySelector('.running-string__inner');
    setInterval(() => {
      if ( didScroll ) {
        didScroll = false;
      } else {
        requestAnimationFrame(move);
      }
    }, 2500);


    const runningInner = [...document.querySelectorAll('.running-string__inner')];
    runningInner.forEach((inner) => {
      inner.innerHTML = `${inner.innerHTML}`.repeat(30);
    });


    /* const marquees = [...document.querySelectorAll('.running-string__inner')];
    marquees.forEach((marquee) => {
        marquee.i = 0;
        marquee.step = 3;
        marquee.width = marquee.clientWidth + 1;
        marquee.innerHTML = `${marquee.innerHTML}`.repeat(50);
    });

    requestAnimationFrame(move);

    function move() {
      marquees.forEach((marquee) => {
          marquee.style.transform = `translate3d(-${marquee.i}px, 0, 0)`;
          marquee.i = marquee.i < marquee.width ? marquee.i + marquee.step : 1;
      });
    }
    */
  });
</script>

<div class="running-string">
  <div class="running-string__inner">
    <span class="running-string__item">
      {#if runningText}{runningText}{/if}
    </span>
  </div>
</div>