<script lang=ts>
  import { onMount } from 'svelte';
  import './running-string.css';

  interface Props {
    runningText?: string
  }
  let  { runningText }: Props = $props();

  onMount(() => {

    /*window.addEventListener('scroll', function() {
      const element = document.querySelector('.running-string');
      const elementInner = document.querySelector('.running-string__inner');
      let position = element.getBoundingClientRect();

      console.log(position.y);

      // checking whether fully visible
      if(position.top >= 0 && position.bottom <= window.innerHeight) {
        console.log('Element is fully visible in screen');
        elementInner.scrollLeft += position.y;
      }
    }); */
  });
</script>

<div class="running-string">
  <div class="running-string__inner">
    <span class="running-string__item">
      {#if runningText}
        { runningText }
      {/if}
    </span>
    <span class="running-string__item">
      {#if runningText}
        { runningText }
      {/if}
    </span>
  </div>
</div>