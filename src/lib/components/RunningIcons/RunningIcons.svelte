<script lang=ts>
  import { colorScheme } from '$lib/store';
  import './running-icons.css';

  import MiMotion from '$lib/assets/images/clients/MiMotion.svelte';
  import VivaHealth from '$lib/assets/images/clients/VivaHealth.svelte';
  import Bradford from '$lib/assets/images/clients/Bradford.svelte';
  import USA from '$lib/assets/images/clients/USA.svelte';
  import PediatricDentalAssociation from '$lib/assets/images/clients/PediatricDentalAssociation.svelte';
  import ProviderPartners from '$lib/assets/images/clients/ProviderPartners.svelte';
  import Legacy from '$lib/assets/images/clients/Legacy.svelte';
  import AdoptAGolden from '$lib/assets/images/clients/AdoptAGolden.svelte';


  let runningIcons = [
    {url: MiMotion},
    {url: VivaHealth},
    {url: Bradford},
    {url: USA},
    {url: PediatricDentalAssociation},
    {url: ProviderPartners},
    {url: Legacy},
    {url: AdoptAGolden}
  ]
</script>

<div class="running-icons running-icons--{$colorScheme}">
  <div class="running-icons__inner">
    {#if runningIcons}
      {#each runningIcons as icon}
        <span class="running-icons__item">
          <icon.url />
        </span>
      {/each}
    {/if}
  </div>
</div>