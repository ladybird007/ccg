<script lang=ts>
  import { Accordion, AccordionItem } from 'svelte-collapsible';
  import IconList from "$lib/components/IconList/IconList.svelte";

  import './accordion.css';

  import Plus from '$lib/assets/images/accordion/Plus.svelte';
  import Arrow from '$lib/assets/images/accordion/Arrow.svelte';
  
  interface Props { 
    accordionItems?:{
      key: string,
      title: string,
      text: string,
      image?: string,
      iconList?: {
        type?: string,
        listItems:{
          icon?: string,
          text?: string,
          link?: string
        }[]
      }
    }[]
	}

  let { accordionItems }:Props = $props();

</script>

{#if accordionItems}
<Accordion>
	
	{#each accordionItems as item}
	
		<AccordionItem key={item.key}>
			
			<div slot='header' class="accordion-title text-large">
				<span class="accordion-number">{item.key}.</span>{ item.title }
        <div class="accordion-icon">
          <Plus />
          <span class="accordion-arrow">
            <Arrow />
          </span>
        </div>
			</div>
			
			<div slot='body' class="accordion-content">
        {#if item.image}
          <div class="accordion-img">
            <img src={item.image} alt="">
          </div>
        {/if}
				<div class="section__content accordion-desc">
          <div class="text-family accordion-text">
            {@html item.text}
          </div>
          {#if item.iconList}
            <h3>Here’s how we do it:</h3>
            <IconList type={item.iconList.type} listItems={item.iconList.listItems} />
          {/if}
        </div>
			</div>

		</AccordionItem>
	
	{/each}

</Accordion>
{/if}