<script lang=ts>
  import './icon-list.css';

  interface Props {
    preHeadeline?: string,  
    mainHeadline?: string, 
    type?: string,
    listItems?:{
      customIcon?: string,
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
    <ul class="icon-list__list {type} h4">
      {#each listItems as item}
        <li class:custom-icon={item.customIcon}>
          {#if item.customIcon}
            <img src={item.customIcon} alt="" />
          {/if}
          {#if item.link}
            <a href={item.link}>{item.text}</a>
          {:else}
            {item.text}
          {/if}
        </li>
      {/each}
    </ul>
  </div>
  {/if}
</div>

