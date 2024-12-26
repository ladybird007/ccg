<script lang=ts>
  import { onMount } from 'svelte';
  import './running-string.css';

  interface Props {
    runningText?: string
  }
  let  { runningText }: Props = $props();



  let lastScrollTop = 0;

  function isVisible(elem) {
    const windowScroll = window.pageYOffset;
    let position = elem.getBoundingClientRect();

    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      elem.classList.add('visible');
      
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        console.log('down');
      } else if (st < lastScrollTop) {
        console.log('up');
      }
      lastScrollTop = st <= 0 ? 0 : st;

      elem.querySelector('.running-string__inner').style.transform = `translate3d(-${windowScroll}px, 0, 0)`;
    } else {
      elem.classList.remove('visible');
    }
  };
  

  onMount(() => {

    window.addEventListener('scroll', function() {
      if(document.querySelector('.running-string') !== 0) {
        const RunningString = document.querySelectorAll('.running-string');
        RunningString.forEach((arrItem) => {
          isVisible(arrItem);
        });
      }
    });

    const marquees = [...document.querySelectorAll('.running-string__inner')];
    marquees.forEach((marquee) => {
      marquee.innerHTML = `${marquee.innerHTML}`.repeat(30);
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