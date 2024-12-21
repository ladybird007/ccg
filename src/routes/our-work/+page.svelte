<script lang="ts">
  import { onMount } from "svelte";
  import "./our-work.css";

  import ClientCard from '$lib/components/ClientCard/ClientCard.svelte';

  import HeroBg from '$lib/assets/images/work/HeroBg.svg';
  import HeroBgMobile from '$lib/assets/images/work/HeroBgMobile.svg';

  import ClientMiMotion from '$lib/assets/images/work/ClientMiMotion.png';
  import MiMotion from '$lib/assets/images/clients/MiMotion.svelte';

  import ClientIndustrialSupplier from '$lib/assets/images/work/ClientIndustrialSupplier.png';

  import ClientVivaHealth from '$lib/assets/images/work/ClientVivaHealth.png';
  import VivaHealth from '$lib/assets/images/clients/VivaHealth.svelte';

  import ClientMedicareCosmetics from '$lib/assets/images/work/ClientMedicareCosmetics.png';

  import ClientGlobalHealth from '$lib/assets/images/work/ClientGlobalHealth.png';

  import ClientLegacy from '$lib/assets/images/work/ClientLegacy.png';
  import Legacy from '$lib/assets/images/clients/Legacy.svelte';

  const pageTitle = `Our Work`;

  let clientCards = [
    {
      class: `traditional-marketing strategic-consulting`,
      imgUrl: ClientMiMotion,
      logo: MiMotion,
      headline: `75th Anniversary Branding`,
      tags: [
        {
          url: `/services/marketing`,
          text: `Traditional Marketing`
        },
        {
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
          url: `/industries/medicare`,
          text: `Medicare`
        },
        {
          url: `/`,
          text: `Traditional Marketing`
        },
        {
          url: `/services/digital-marketing`,
          text: `Digital Marketing`
        },
        {
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
          url: `/`,
          text: `Digital Marketing`
        }, 
        {
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
          url: `/services/strategy`,
          text: `Strategic Consulting`
        },
        {
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
          url: `/`,
          text: `Strategic Consultiing`
        },
        {
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
          url: `/`,
          text: `Strategic Consultiing`
        },
        {
          url: `/services/ux-design`,
          text: `UI/UX`
        }
      ]
    },
  ]

 onMount(() => {
  let grid = document.querySelector('.grid');
  let iso;

  imagesLoaded( grid, function() {
    // init Isotope after all images have loaded
    iso = new Isotope( grid, {
      itemSelector: '.client-card',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
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

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<div class="our-work">
  <div class="hero-section">
    <div class="container">
      <h1>{pageTitle}</h1>
    </div>
    <img class="hero-section__img hero-section__img--dots mobile-hidden" src={HeroBg} alt="">
    <img class="hero-section__img hero-section__img--dots mobile-visible" src={HeroBgMobile} alt="">
  </div>
  

  <div class="section">
    <div class="container section__content">
      <p class="text-simple pre-headline">Case Studies</p>
      <h2>Marketing strategies that drive evolution.</h2>

      <div class="filters-button-group button-group tags grey">
        <button class="button tag is-checked" data-filter="*">All</button>
        <button class="button tag" data-filter=".traditional-marketing">Traditional Marketing</button>
        <button class="button tag" data-filter=".digital-marketing">Digital Marketing</button>
        <button class="button tag" data-filter=".medicare">Medicare</button>
        <button class="button tag" data-filter=".strategic-consulting">Strategic Consulting</button>
        <button class="button tag" data-filter=".ui-ux">UI/UX</button>
        <button class="button tag" data-filter=".video">Video</button>
      </div>


      {#if clientCards}
        <div class="clients grid">
          <div class="grid-sizer"></div>
          {#each clientCards as card}
            <ClientCard {...card} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>