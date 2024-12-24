<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header/Header.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';

  import '../app.css';

  let { children } = $props();


  const isVisible = function (elems) {
    elems.forEach((elem, index) => {

      const elemParent = elem.closest(".section"),
            elemTop = elem.getBoundingClientRect().top,
            windowScroll = window.pageYOffset;

            console.log(index, elemTop);

      if (elemTop > windowScroll) {
        console.log(index, 'ttt')
        elemParent.classList.add('drawing');
      }
    });
  };

  onMount(() => {
    window.addEventListener('scroll', function() {
      isVisible(document.querySelectorAll('.headline-highlight'))
    });
  })
</script>

<Header />

{@render children()}

<Footer />