<script lang=ts>
  import './icon-list.css';

  interface Props {
    preHeadeline?:string,  
    mainHeadline?:string, 
    type?:string,
    listItems?:{
      icon?: string,
      text?: string,
      link?: string
    }[]
	}

  let { preHeadeline, mainHeadline, type, listItems }:Props = $props();

</script>

<div class="icon-list">
  {#if mainHeadline}
  <div class="icon-list__text section__content">
    {#if preHeadeline}
      <p class="text-simple pre-headline">
        {preHeadeline}
      </p>
    {/if}
    <h2>
      {@html mainHeadline}
    </h2>
  </div>
  {/if}
  {#if listItems}
  <div class="icon-list__list-wrap">
    <ul class="icon-list__list icon-list__list--{type} h4">
      {#each listItems as item}
        {#if item.icon}
          <li class="icon-list__li-chart2">
            {#if item.link}
              <a href={item.link}>{item.text}</a>
            {:else}
              {item.text}
            {/if}
          </li>
        {:else}
          <li>
            {#if item.link}
              <a href={item.link}>{item.text}</a>
            {:else}
              {item.text}
            {/if}
          </li>
        {/if}
      {/each}
    </ul>
  </div>
  {/if}
</div>

