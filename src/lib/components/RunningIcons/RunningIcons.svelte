<script lang=ts>
  import { gsap } from 'gsap/dist/gsap.js'
  import { Observer }  from "gsap/dist/Observer";
  import { onMount } from 'svelte';
  import { colorScheme } from '$lib/store';
  import './running-icons.css';
  gsap.registerPlugin(Observer);

  import MiMotion from '$lib/assets/images/clients/MiMotion.svelte';
  import VivaHealth from '$lib/assets/images/clients/VivaHealth.svelte';
  import Bradford from '$lib/assets/images/clients/Bradford.svelte';
  import USA from '$lib/assets/images/clients/USA.svelte';
  import PediatricDentalAssociation from '$lib/assets/images/clients/PediatricDentalAssociation.svelte';
  import ProviderPartners from '$lib/assets/images/clients/ProviderPartners.svelte';
  import Legacy from '$lib/assets/images/clients/Legacy.svelte';
  import AdoptAGolden from '$lib/assets/images/clients/AdoptAGolden.svelte';

  let runningIcons = [
    {url: MiMotion},
    {url: VivaHealth},
    {url: Bradford},
    {url: USA},
    {url: PediatricDentalAssociation},
    {url: ProviderPartners},
    {url: Legacy},
    {url: AdoptAGolden}
  ]


  let mobileDevice = false;

  onMount(() => { 

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const rollConst = roll(".rollingIcons", {duration: 60}, false);
      Observer.create({
        onChangeY(self) {
          let factor = 2.5;
          if (self.deltaY < 0) {
            factor *= -1;
          } 
          gsap.timeline({
            defaults: {
              ease: "none",
            }
          })
            .to(rollConst, { timeScale: factor * 2.5, duration: 0.2 })
            .to(rollConst, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
        }
      }); 

        // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
      function roll(targets, vars, reverse) {
        const tl = gsap.timeline({
          repeat: -1,
          onReverseComplete() { 
            this.totalTime(this.rawTime() + this.duration() * 20); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
          }
        });
        vars = vars || {};
        vars.ease || (vars.ease = "none");
        gsap.utils.toArray(targets).forEach(el => {
          let clone = el.cloneNode(true);
          el.parentNode.appendChild(clone);
          //gsap.set(clone, {position: "absolute", top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)});
          tl.to([el, clone], {xPercent: reverse ? 100 : -100, ...vars}, 0);
        });
        return tl;
      }
    });


    function setAnimation () {
      let windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        const cloneElements = document.querySelectorAll(".rollingIcons");
        cloneElements.forEach(el => {
          el.remove();
        });
        mobileDevice = true;
      } else {
        mobileDevice = false;
      }
    }
    
    setAnimation();
    window.addEventListener( 'resize', () => {
      setAnimation();
    });
  });

</script>

<div class="running-icons running-icons--{$colorScheme}">
  {#if mobileDevice} 
    <div class="running-icons__inner">
      {#if runningIcons}
        {#each runningIcons as icon}
          <span class="running-icons__item ">
            <icon.url />
          </span>
        {/each}
      {/if}
    </div>
  {:else}
    <div class="running-icons__inner rollingIcons">
      {#if runningIcons}
        {#each runningIcons as icon}
          <span class="running-icons__item ">
            <icon.url />
          </span>
        {/each}
      {/if}
    </div>
  {/if}
  
</div>