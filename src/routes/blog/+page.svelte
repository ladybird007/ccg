<script lang="ts">
  import { onMount } from "svelte";
  import "../our-work/our-work.css";

  import ClientCard from '$lib/components/ClientCard/ClientCard.svelte';

  import HeroBg from '$lib/assets/images/blog/HeroBg.svg';

  import post1 from '$lib/assets/images/blog/postPosters/post1.png';
  import post2 from '$lib/assets/images/blog/postPosters/post2.png';
  import post3 from '$lib/assets/images/blog/postPosters/post3.png';
  import post4 from '$lib/assets/images/blog/postPosters/post4.png';
  import post5 from '$lib/assets/images/blog/postPosters/post5.png';
  import post6 from '$lib/assets/images/blog/postPosters/post6.png';
  import post7 from '$lib/assets/images/blog/postPosters/post7.png';
  import post8 from '$lib/assets/images/blog/postPosters/post8.png';
  import post9 from '$lib/assets/images/blog/postPosters/post9.png';

  const pageTitle = `Blog`;

  let blogCards = [
    {
      url: `blog/A-New-Age-of-New-to-Medicare-Marketing`,
      class: `marketing strategy`,
      imgUrl: post1,
      headline: `A New Age of New-to-Medicare Marketing`,
      metaData: {
        authorName: `Brianna Weekley`,
        date: `Oct 21`,
        duration: `2 min read`
      },
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
      url: `blog/Election-Proof-Your-AEP`,
      class: `medicare marketing`,
      imgUrl: post2,
      headline: `Election Proof Your AEP`,
      tags: [
        {
          url: `/industries/medicare`,
          text: `Medicare`
        },
        {
          url: `/`,
          text: `Traditional Marketing`
        }
      ]
    },
    {
      url: `blog/The-Power-of-Hypersegementation-&-Personalization`,
      class: `medicare digital-marketing`,
      imgUrl: post3,
      headline: `The Power of Hypersegementation & Personalization`,
      tags: [
        {
          url: `/industries/medicare`,
          text: `Medicare`
        },
        {
          url: `/`,
          text: `Digital Marketing`
        }
      ]
    },
    {
      url: `blog/From-Concept-to-Reality-Showcasing-Impactful-Design-Case-Studies`,
      class: `strategy ui-ux`,
      imgUrl: post4,
      headline: `From Concept to Reality: Showcasing Impactful Design Case Studies`,
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
      url: `Designing-for-Humans-UX/UI-Insights-from-Our-Expert-Team`,
      class: `strategy medicare`,
      imgUrl: post5,
      headline: `Designing for Humans: UX/UI Insights from Our Expert Team`,
      tags: [ 
        {
          url: `/industries/medicare`,
          text: `Medicare`
        },
        {
          url: `/services/strategy`,
          text: `Strategic Consulting`
        },
      ]
    },
    {
      url: `Future-Proofing-Web-Development-Navigating-the-Latest-Trends`,
      class: `strategy ui-ux`,
      imgUrl: post6,
      headline: `Future-Proofing Web Development: Navigating the Latest Trends`,
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
    {
      url: `A-New-Age-of-New-to-Medicare-Marketing`,
      class: `strategy ui-ux`,
      imgUrl: post7,
      headline: `A New Age of New-to-Medicare Marketing`,
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
      url: `Designing-for-Humans-UX/UI-Insights-from-Our-Expert-Team`,
      class: `strategy medicare`,
      imgUrl: post8,
      headline: `Designing for Humans: UX/UI Insights from Our Expert Team`,
      tags: [ 
        {
          url: `/industries/medicare`,
          text: `Medicare`
        },
        {
          url: `/services/strategy`,
          text: `Strategic Consulting`
        },
      ]
    },
    {
      url: `Future-Proofing-Web-Development-Navigating-the-Latest-Trends`,
      class: `strategy ui-ux`,
      imgUrl: post9,
      headline: `Future-Proofing Web Development: Navigating the Latest Trends`,
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
  ];

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

<div class="blog">
  <div class="hero-section">
    <div class="container">
      <h1>{pageTitle}</h1>
    </div>
    <img class="hero-section__img hero-section__img--square" src={HeroBg} alt="">
  </div>
  

  <div class="section">
    <div class="container section__content">
      <p class="text-simple pre-headline">Blog</p>
      <h2>Our Recent Thoughts</h2>

      <div class="filters-button-group button-group tags grey">
        <button class="button tag is-checked" data-filter="*">All</button>
        <button class="button tag" data-filter=".marketing">Marketing</button>
        <button class="button tag" data-filter=".digital-marketing">Digital Marketing</button>
        <button class="button tag" data-filter=".medicare">Medicare</button>
        <button class="button tag" data-filter=".strategy">Strategy</button>
        <button class="button tag" data-filter=".ui-ux">UI/UX</button>
      </div>


      {#if blogCards}
        <div class="clients grid">
          <div class="grid-sizer"></div>
          {#each blogCards as card}
            <ClientCard {...card} />
          {/each}
        </div>
      {/if}

    </div>
  </div>
</div>