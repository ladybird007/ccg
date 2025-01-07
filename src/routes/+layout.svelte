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

    // drawing 'headline-highlight' background on scroll
    window.addEventListener('scroll', function() {
      if(document.querySelector('.headline-highlight') !== 0) {
        const driwingHeadlines = document.querySelectorAll('.headline-highlight');
        driwingHeadlines.forEach((arrItem) => {
          isVisible(arrItem);
        });
      }
    });

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((btn) => {
      const arrowIcon = document.createElement('span');

      arrowIcon.classList.add('btn__icon')
      arrowIcon.innerHTML += `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.665 3.69913L1.5927 9.5927L0.199768 8.15753L6.19886 2.335L1.665 2.335L1.665 0.335003H8.665H9.665V1.335V8.335H7.665L7.665 3.69913Z" fill="currentColor"/>
      </svg>`;

      btn.appendChild(arrowIcon);
    });

  })
</script>

<Header />

{@render children()}

<Footer />