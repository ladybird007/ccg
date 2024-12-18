<script>
  import { onMount } from "svelte";
  import "./our-work.css";

  import ClientCard from '$lib/components/ClientCard/ClientCard.svelte';

  import HeroBg from '$lib/assets/images/work/HeroBg.svg';

  import ClientMiMotion from '$lib/assets/images/work/ClientMiMotion.png';
  import MiMotion from '$lib/assets/images/clients/MiMotion.svelte';

  import ClientIndustrialSupplier from '$lib/assets/images/work/ClientIndustrialSupplier.png';

  import ClientVivaHealth from '$lib/assets/images/work/ClientVivaHealth.png';
  import VivaHealth from '$lib/assets/images/clients/VivaHealth.svelte';

  import ClientMedicareCosmetics from '$lib/assets/images/work/ClientMedicareCosmetics.png';

  import ClientGlobalHealth from '$lib/assets/images/work/ClientGlobalHealth.png';

  import ClientLegacy from '$lib/assets/images/work/ClientLegacy.png';
  import Legacy from '$lib/assets/images/clients/Legacy.svelte';

  let clientCards = {
    cards: [
      {
        class: `traditional-marketing strategic-consulting`,
        imgUrl: ClientMiMotion,
        logo: MiMotion,
        headline: `75th Anniversary Branding`,
        tags: [
          {
            type: `grey`,
            url: `/services/marketing`,
            text: `Traditional Marketing`
          },
          {
            type: `grey`,
            url: `/services/strategy`,
            text: `Strategic Consulting`
          }
        ]
      },
      {
        class: `medicare traditional-marketing digital-marketing ui-ux`,
        imgUrl: ClientVivaHealth,
        logo: VivaHealth,
        headline: `VIVA MEDICARE AEP Marketing`,
        tags: [
          {
            type: `grey`,
            url: `/industries/medicare`,
            text: `Medicare`
          },
          {
            type: `grey`,
            url: `/`,
            text: `Traditional Marketing`
          },
          {
            type: `grey`,
            url: `/services/digital-marketing`,
            text: `Digital Marketing`
          },
          {
            type: `grey`,
            url: `/services/ux-design`,
            text: `UI/UX`
          }
        ]
      },
      {
        class: `digital-marketing strategic-consulting`,
        imgUrl: ClientGlobalHealth,
        logo: VivaHealth,
        headline: `Global Health AEP Marketing`,
        tags: [
          {
            type: `grey`,
            url: `/`,
            text: `Digital Marketing`
          }, 
          {
            type: `grey`,
            url: `/`,
            text: `Strategic Consultiing`
          },
        ]
      },
      {
        class: `Strategic Consulting ui-ux`,
        imgUrl: ClientIndustrialSupplier,
        logo: MiMotion,
        headline: `Industrial Supplier Website Redesign`,
        tags: [
          {
            type: `grey`,
            url: `/services/strategy`,
            text: `Strategic Consulting`
          },
          {
            type: `grey`,
            url: `/services/ux-design`,
            text: `UI/UX`
          }
        ]
      },
      {
        class: `strategic-consulting video`,
        imgUrl: ClientMedicareCosmetics,
        logo: VivaHealth,
        headline: `Medicare Commercials Spots`,
        tags: [
          {
            type: `grey`,
            url: `/`,
            text: `Strategic Consultiing`
          },
          {
            type: `grey`,
            url: `/`,
            text: `Video`
          }
        ]
      },
      {
        class: `strategic-consulting ui-ux`,
        imgUrl: ClientLegacy,
        logo: Legacy,
        headline: `Legacy Cabinets Website`,
        tags: [
          {
            type: `grey`,
            url: `/`,
            text: `Strategic Consultiing`
          },
          {
            type: `grey`,
            url: `/services/ux-design`,
            text: `UI/UX`
          }
        ]
      },
    ]
  }

  onMount(() => {
    const grid = document.querySelector('.clients');
    let iso = new Isotope( grid, {
      itemSelector: '.client-card',
      layoutMode: 'fitRows',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });

    // filter functions
    let filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function( itemElem ) {
        let number = itemElem.querySelector('.number').textContent;
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function( itemElem ) {
        let name = itemElem.querySelector('.name').textContent;
        return name.match( /ium$/ );
      }
    };

    // bind filter button click
    let filtersElem = document.querySelector('.filters-button-group');
    filtersElem.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, 'button' ) ) {
        return;
      }
      let filterValue = event.target.getAttribute('data-filter');
      // use matching filter function
      filterValue = filterFns[ filterValue ] || filterValue;
      iso.arrange({ filter: filterValue });
    });

    // change is-checked class on buttons
    let buttonGroups = document.querySelectorAll('.button-group');
    for ( let i=0, len = buttonGroups.length; i < len; i++ ) {
      let buttonGroup = buttonGroups[i];
      radioButtonGroup( buttonGroup );
    }

    function radioButtonGroup( buttonGroup ) {
      buttonGroup.addEventListener( 'click', function( event ) {
        // only work with buttons
        if ( !matchesSelector( event.target, 'button' ) ) {
          return;
        }
        buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
        event.target.classList.add('is-checked');
      });
    }
  })
  
</script>

<div class="our-work">
  <div class="hero-section">
    <div class="container">
      <h1>Our Work</h1>
    </div>
    <img class="hero-section__img" src={HeroBg} alt="">
  </div>

  <div class="section">
    <div class="container section__content">
      <p class="text-simple pre-headline">Case Studies</p>
      <h2>Marketing strategies that drive evolution.</h2>

      <div class="filters-button-group button-group tags">
        <button class="button tag tag--grey is-checked" data-filter="*">all</button>
        <button class="button tag tag--grey" data-filter=".traditional-marketing">Traditional Marketing</button>
        <button class="button tag tag--grey" data-filter=".digital-marketing">Digital Marketing</button>
        <button class="button tag tag--grey" data-filter=".medicare">Medicare</button>
        <button class="button tag tag--grey" data-filter=".strategic-consulting">Strategic Consulting</button>
        <button class="button tag tag--grey" data-filter=".ui-ux">UI/UX</button>
        <button class="button tag tag--grey" data-filter=".video">Video</button>
      </div>


      {#if clientCards}
        <div class="clients">
          <div class="grid-sizer"></div>
          {#each clientCards.cards as card}
            <ClientCard {...card} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>