<script lang='ts'>
  import { popopVisible } from '$lib/store';
  import './popup.css';

  interface Props {
    posterUrl?: string,
    videoUrl?: string,
	}

  let { posterUrl, videoUrl }:Props = $props();

  function showPopupHandler() {
    popopVisible.update(v => v = false);
  }
</script>

{#if popopVisible} 
  <div class="popup">
    <div class="popup__over" onclick={showPopupHandler}></div>
    <div class="popup__content">
      <video poster={posterUrl} autoplay controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  </div>
{/if}