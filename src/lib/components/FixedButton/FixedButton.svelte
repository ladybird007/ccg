<script lang=ts>
  import './fixed-button.css';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('fff');
  return false
  }
</script>
<button class="fixed-btn" on:click={scrollToTop}>Scroll</button>