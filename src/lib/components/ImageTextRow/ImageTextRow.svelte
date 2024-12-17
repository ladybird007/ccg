<script lang=ts>
  import TextBlock from "../TextBlock/TextBlock.svelte";

  import './image-text-row.css';

  interface Props {
    addClassCol?: string,
    imgUrl?: string,
    preHeadeline?: string, 
    mainHeadline?: string,
    mainText?: string, 
    colImgBgUrl?: string,
    buttons?:{
      url: string,
      text: string,
      type: string
    }[]
	}

  const rowItemProps:Props = $props();
</script>

<div class="image-text">
  {#if rowItemProps.imgUrl}
    <div class="image-text__col image-text__col--img image-text__col--{rowItemProps.addClassCol}" style="background-image: url('{rowItemProps.colImgBgUrl}')">
      <img src={rowItemProps.imgUrl} alt="">
    </div>
  {/if}
  <div class="image-text__col image-text__col--text">
    <TextBlock { ...rowItemProps } />
  </div>
</div>
  