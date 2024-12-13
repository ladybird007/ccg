<script lang=ts>
  import SmallOrangeCircle from '$lib/assets/images/icons/SmallOrangeCircle.svg';
  import './icon-list.css';

  interface Props {
    preHeadeline?:string,  
    mainHeadline?:string, 
    type?:string,
    listItems?:{
      text: string,
    }[]
	}

  let { preHeadeline, mainHeadline, type, listItems }:Props = $props();

</script>

<div class="icon-list">
  <div class="icon-list__text section__content">
    {#if preHeadeline}
      <p class="text-simple in-line">
        <img src={SmallOrangeCircle} alt="">
        {preHeadeline}
      </p>
    {/if}
    {#if mainHeadline}
      <h2>
        {@html mainHeadline}
      </h2>
    {/if}
  </div>
  <ul class="icon-list__list icon-list__list--{type}">
    {#each listItems as liItem}
      <li>
        {liItem.text}
      </li>
    {/each}
  </ul>
</div>

