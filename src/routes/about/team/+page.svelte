<script lang='ts'>
  import { onMount } from "svelte";
  import TeamCard from "$lib/components/TeamCard/TeamCard.svelte";
  import Button from "$lib/components/Button/Button.svelte";

  import '$lib/components/Tags/tags.css';
  import './team.css';

  import HeroBg from '$lib/assets/images/team/HeroBg.svg';

  import BartonCummings from '$lib/assets/images/team/BartonCummings.png';
  import RaynBradley from '$lib/assets/images/team/RaynBradley.png';
  import KelseyBlakney from '$lib/assets/images/team/KelseyBlakney.png';
  import GarrettCummings from '$lib/assets/images/team/GarrettCummings.png';
  import MarcEngel from '$lib/assets/images/team/MarcEngel.png';
  import BriannaWeekly from '$lib/assets/images/team/BriannaWeekly.png';
  import MuhammadAiKahlout from '$lib/assets/images/team/MuhammadAiKahlout.png';
  import SamHumphries from '$lib/assets/images/team/SamHumphries.png';
  import NathanOwens from '$lib/assets/images/team/NathanOwens.png';
  import AnnaRamia from '$lib/assets/images/team/AnnaRamia.png';
  import EmilyAlexander from '$lib/assets/images/team/EmilyAlexander.png';
  import LeslieJohnson from '$lib/assets/images/team/LeslieJohnson.png';
  import BrittanyBathie from '$lib/assets/images/team/BrittanyBathie.png';
  import NinaDiamantis from '$lib/assets/images/team/NinaDiamantis.png';
  import CarolynRolbiecki from '$lib/assets/images/team/CarolynRolbiecki.png';
  import LaurenHillgarten from '$lib/assets/images/team/LaurenHillgarten.png';
  import MaddieJarman from '$lib/assets/images/team/MaddieJarman.png';
  import KatieRankin from '$lib/assets/images/team/KatieRankin.png';
  import DanielleKossler from '$lib/assets/images/team/DanielleKossler.png';
  import AbbyWilliams from '$lib/assets/images/team/AbbyWilliams.png';
  import SpancerDavis from '$lib/assets/images/team/SpancerDavis.png';

  const pageTitle = `Meet the Team`;

  let teamCards = [
    {
      class: `leadership`,
      imgUrl: BartonCummings,
      name: `Barton Cummings`, 
      position: `President`,
      link: `team/BartonCummings`
    },
    {
      class: `leadership`,
      imgUrl: RaynBradley,
      name: `Ryan Bradley`, 
      position: `Interactive Director`,
      link: `team/RaynBradley`
    },
    {
      class: `leadership accounts`,
      imgUrl: KelseyBlakney,
      name: `Kelsey Blakney`, 
      position: `Accounts Director`,
      link: `team/KelseyBlakney`
    },
    {
      class: `leadership UX`,
      imgUrl: GarrettCummings,
      name: `Garrett Cummings`, 
      position: `UX Director`,
      link: `team/GarrettCummings`
    },
    {
      class: `leadership creative`,
      imgUrl: MarcEngel,
      name: `Marc Engel`, 
      position: `Executive Creative Director`,
      link: `team/MarcEngel`
    },
    {
      class: `leadership`,
      imgUrl: BriannaWeekly,
      name: `Brianna Weekley`, 
      position: `Strategy Director`,
      link: `team/BriannaWeekly`
    },
    {
      class: `digital`,
      imgUrl: MuhammadAiKahlout,
      name: `Muhammad Al-Kahlout`, 
      position: `Digital Marketing Director`, 
      link: `team/MuhammadAiKahlout`
    },
    {
      class: `leadership digital creative`,
      imgUrl: SamHumphries,
      name: `Sam Humphries`, 
      position: `Digital Creative Director`,
      link: `team/SamHumphries`
    },
    {
      class: `digital`,
      imgUrl: NathanOwens,
      name: `Nathan Owens`, 
      position: `Senior Software Developer`,
      link: `team/NathanOwens`
    },
    {
      class: `creative`,
      imgUrl: AnnaRamia,
      name: `Anna Ramia`, 
      position: `Senior Art Director`,
      link: `team/AnnaRamia`
    },
    {
      class: `creative`,
      imgUrl: EmilyAlexander,
      name: `Emily Alexander`, 
      position: `Senior Art Director`,
      link: `team/EmilyAlexander`
    },
    {
      class: `accounts`,
      imgUrl: LeslieJohnson,
      name: `Leslie Johnson`, 
      position: `Account Executive`,
      link: `team/LeslieJohnson`
    },
    {
      class: `accounts`,
      imgUrl: BrittanyBathie,
      name: `Brittany Bathie`, 
      position: `Account Executive`,
      link: `team/BrittanyBathie`
    },
    {
      class: `accounts`,
      imgUrl: NinaDiamantis,
      name: `Nina Diamantis`, 
      position: `Account Executive`,
      link: `team/NinaDiamantis`
    },
    {
      class: `UX`,
      imgUrl: CarolynRolbiecki,
      name: `Carolyn Rolbiecki`, 
      position: `UX Designer`,
      link: `team/CarolynRolbiecki`
    },
    {
      class: `UX`,
      imgUrl: LaurenHillgarten,
      name: `Lauren Hillgartner`, 
      position: `UI/UX Designer`,
      link: `team/LaurenHillgarten`
    },
    {
      class: `digital`,
      imgUrl: MaddieJarman,
      name: `Maddie Jarman`, 
      position: `Marketing Coordinator`,
      link: `team/MaddieJarman`
    },
    {
      class: `digital`,
      imgUrl: KatieRankin,
      name: `Katie Rankin`, 
      position: `Digital Marketing Manager`,
      link: `team/KatieRankin`
    },
    {
      class: `interactive`,
      imgUrl: DanielleKossler,
      name: `Danielle Kossler`, 
      position: `Software Developer`,
      link: `team/DanielleKossler`
    },
    {
      class: `creative`,
      imgUrl: AbbyWilliams,
      name: `Abby Williams`, 
      position: `Graphic Designer`,
      link: `team/AbbyWilliams`
    },
    {
      class: `accounts`,
      imgUrl: SpancerDavis,
      name: `Spencer Davis`, 
      position: `Accounting`,
      link: `team/SpancerDavis`
    }
  ];

  onMount(() => {

    let grid = document.querySelector('.grid');
    let iso = new Isotope( grid, {
        layoutMode: 'fitRows',
        itemSelector: '.team-card',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer'
        }
    });

    imagesLoaded( grid ).on( 'progress', function() {
      iso.layout();
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

<div class="our-team">
  <div class="hero-section">
    <div class="container section__content">
      <a href="/about" class="text-simple pre-headline">About</a>
      <h1>{pageTitle}</h1>
    </div>
    <img class="hero-section__img hero-section__img--diagrams" src={HeroBg} alt="">
  </div>

  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col col--flex-1">
          <h2>
            Over <span class="headline-highlight">30 years</span> of problem-solving. Meet the experts behind the solutions.
          </h2>
        </div>
        <div class="col col--flex-1 section__content align-flex-start">
          <p class="text-family">
            When you work with us, you're not just getting a service—you're partnering with real experts. The people you see and talk to are the ones driving your strategies forward. With us, there's no juniors. All we offer is expertise.
          </p>
          <Button
            text={`Our Approach`}
            link={`/our-work`}
            typeClass={`outline`}
          />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="filters-button-group button-group tags">
        <button class="button tag tag--grey is-checked" data-filter="*">All</button>
        <button class="button tag tag--grey" data-filter=".leadership">Leadership</button>
        <button class="button tag tag--grey" data-filter=".accounts">Accounts</button>
        <button class="button tag tag--grey" data-filter=".creative">Creative</button>
        <button class="button tag tag--grey" data-filter=".digital">Digital</button>
        <button class="button tag tag--grey" data-filter=".interactive">Interactive</button>
        <button class="button tag tag--grey" data-filter=".UX">UX</button>
      </div>

      {#if teamCards}
        <div class="team grid">
          <div class="grid-sizer"></div>
          {#each teamCards as card}
            <TeamCard {...card} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>