<script lang=ts>
  import { Accordion, AccordionItem } from 'svelte-collapsible';
  import Plus from '$lib/assets/images/accordion/Plus.svelte';
  import Arrow from '$lib/assets/images/accordion/Arrow.svelte';
  import './accordion.css';

  interface Props { 
    accordionItems?:{
      key: string,
      title: string,
      text: string
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
			
			<p slot='body'>
				{ item.text }
			</p>

		</AccordionItem>
	
	{/each}

</Accordion>
{/if}