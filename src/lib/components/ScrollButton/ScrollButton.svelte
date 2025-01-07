<script lang=ts>
  import './scroll-button.css';

  const scrollToNextSection = () => {
    const headerHeight = document.querySelector('.header').offsetHeight,
          nextSectionTop = document.querySelector('.top-section').nextElementSibling.offsetTop - headerHeight;

    window.scrollTo({ top: nextSectionTop, behavior: 'smooth' });
    return false
  }
</script>

<button class="scroll-btn" on:click={scrollToNextSection}>Scroll</button>