<script lang='ts'>
  import { popopVisible } from '$lib/store';
  import './popup.css';

  interface Props {
    posterUrl?: string,
    videoUrl?: string,
	}

  let { posterUrl, videoUrl }:Props = $props();

  function hidePopupHandler() {
    popopVisible.update(v => v = false);
  }
</script>

{#if $popopVisible} 
  <div class="popup">
    <button class="popup__over" onclick={hidePopupHandler} aria-label="play"></button>
    <div class="popup__content">
      <video poster={posterUrl} autoplay controls>
        <source src={videoUrl} type="video/mp4" />
        <track kind='captions'/> 
      </video>
    </div>
  </div>
{/if}