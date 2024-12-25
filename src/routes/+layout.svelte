<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header/Header.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';

  import '../app.css';

  let { children } = $props();


 function isVisible(elem) {
  const elemParent = elem.closest('.section'),
        elemParentTop = elem.closest('.section').offsetTop - (window.innerHeight / 2),
        windowScroll = window.pageYOffset;

    if (elemParentTop < windowScroll) {
      elemParent.classList.add('visible');
    }
  };

  onMount(() => {
    window.scrollTo({top: 0});

    window.addEventListener('scroll', function() {
      const driwingHeadlines = document.querySelectorAll('.headline-highlight');
      driwingHeadlines.forEach((arrItem) => {
        isVisible(arrItem);
      });
    });
  })
</script>

<Header />

{@render children()}

<Footer />