<script lang=ts>
  import SmallOrangeCircle from '$lib/assets/images/icons/SmallOrangeCircle.svg';
  import './icon-list.css';

  interface Props {
    preHeadeline?:string,  
    mainHeadline?:string, 
    type?:string,
    listItems?:{
      icon?: string,
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
  {#if listItems}
  <div class="icon-list__list-wrap">
    <ul class="icon-list__list icon-list__list--{type} h4">
      {#each listItems as item}
        {#if item.icon}
          <li class="icon-list__li-chart2">
            {item.text}
          </li>
        {:else}
          <li>
            {item.text}
          </li>
        {/if}
      {/each}
    </ul>
  </div>
  {/if}
</div>

