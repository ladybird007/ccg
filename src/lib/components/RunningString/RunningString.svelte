<script lang=ts>
  import { gsap } from 'gsap/dist/gsap.js'
  import { Observer }  from "gsap/dist/Observer";
  import { onMount } from 'svelte';
  import './running-string.css';
  gsap.registerPlugin(Observer);

  interface Props {
    colorText?: string,
    runningText: string
  }
  
  let  { runningText, colorText }: Props = $props();

  onMount(() => {      
    const rollConst = roll(".rollingText", { duration: 100 }, false);
    function roll(targets: string, vars: any, reverse: boolean) {
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
          .to(rollConst,{ timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      }
    });    
  });

 
</script>

<div class="running-string {colorText}">
  <div class="running-string__inner rollingText">
    <span class="running-string__item">{runningText}</span>
    <span class="running-string__item">{runningText}</span>
    <span class="running-string__item">{runningText}</span>
  </div>
</div>