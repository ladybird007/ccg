<script>  
  import TopSection from "$lib/components/TopSection/TopSection.svelte";
  import ResultsSection from "$lib/components/ResultsSection/ResultsSection.svelte";
  import TextBlock from "$lib/components/TextBlock/TextBlock.svelte";
  import IconTextCard from "$lib/components/IconTextCard/IconTextCard.svelte";
  import IconList from "$lib/components/IconList/IconList.svelte";
  import RunningString from "$lib/components/RunningString/RunningString.svelte";
  import RunningIcons from "$lib/components/RunningIcons/RunningIcons.svelte";

  import VideoPlay from '$lib/assets/images/home/VideoPlay.jpg';
  import WhyPeople from '$lib/assets/images/home/WhyPeople.svg';
  import WhyExperience from '$lib/assets/images/home/WhyExperience.svg';
  import WhyWork from '$lib/assets/images/home/WhyWork.svg';

  let topSectionDetails ={
    preHeadeline: `Performance Marketing Agency`,
    mainHeadline: `Grow and evolve your business with strategies that `,
    headlineHighlight: `stick.`,
    subHeadline:  `We're a performance agency that blends consulting & marketing to transform your business's revenue potential.`,
    buttons: [
      {
        url: '/our-work',
        text: 'Our Approach',
        type: 'secondary'
      },
      {
        url: '/our-work',
        text: 'Our Work',
        type: 'outline'
      }
    ],
    imgUrl: VideoPlay,
    popupBtnUrl: 'modal-link'
  };

  let resultsSectionDetails = {
    runningText: `Real Results. No Glitter.`,
    preHeadeline: `Our Process`,
    mainHeadline: `Just Marketing That Works.`,
    mainText: `We're not here to sell you shiny new trends. And as much as we love a little flair, our approach combines research, data, and tried-and-true marketing to elevate businesses from potential to exceptional.`,
    buttons: [
      {
        url: '/our-work',
        text: 'Our Approach',
        type: 'outline'
      }
    ],
    accordionItems: [
      {
        key: `01`,
        title: `Evaluate`,
        text: `Some text`
      },
      {
        key: `02`,
        title: `Understand`,
        text: `We synthesize the data to create smart, goal-focused strategies.`
      },
      {
        key: `03`,
        title: `Grow`,
        text: `Some text`
      },
      {
        key: `04`,
        title: `Evolve`,
        text: `Some text`
      }
    ]
  };

  let whyCCGText = {
    preHeadeline: `Why CCG?`,
    mainHeadline: `We challenge the notion of <span class="headline-highlight">big box</span> agencies.`,
    mainText: `At CCG, our relationships aren't transactional; they're collaborative and built for the long-term. We're about understanding your needs and working together to transform your business. What makes us different?`,
  }

  let whyCCGCards = {
    cards: [
      {
        icon: WhyPeople,
        headline: `Our People`,
        text: `All we offer is expertise. Check out our team of problem-solvers.`,
        buttons: [
          {
            url: '/our-team',
            text: 'Meet Our Team',
            type: 'outline'
          }
        ]
      },
      {
        icon: WhyExperience,
        headline: `Our Experience`,
        text: `From B2B to Healthcare, we bring specialized expertise to every industry.`,
        buttons: [
          {
            url: '/industries/medicare',
            text: 'View Industries',
            type: 'outline'
          }
        ]
      },
      {
        icon: WhyWork,
        headline: `Our Work`,
        text: `Together, we've helped our partners generate millions of dollars in revenue.`,
        buttons: [
          {
            url: '/our-work',
            text: 'View Case Studies',
            type: 'outline'
          }
        ]
      }
    ]
  }

  let solvedPropblemsList = {
    preHeadeline: `How We Can Help`,
    mainHeadline: `Problems <br> We Solve`,
    type: `arrow`,
    listItems: [
      {
        text: `Fixing Siloed Marketing Approaches`
      },
      {
        text: `Addressing Fragmented Systems`
      },
      {
        text: `Aligning Sales & Marketing`
      },
      {
        text: `Increasing Visibility`
      },
      {
        text: `Creating Demand Generation`
      },
      {
        text: `Improving Customer Retention`
      },
      {
        text: `Reducing Operational Inefficiencies`
      },
      {
        text: `Maximizing ROI`
      }
    ]
  }

</script>

<div class="home">
  <TopSection {...topSectionDetails} />

  <ResultsSection {...resultsSectionDetails} />

  <div class="section why-ccg">
    <div class="container">
      <TextBlock {...whyCCGText} />
    </div>
    <div class="container">
      <div class="row">
        <IconTextCard {...whyCCGCards} />
      </div>
    </div>
  </div>

  <div class="section section--solved">
    <div class="container">
      <IconList {...solvedPropblemsList} />
    </div>
  </div>

  <div class="section section--small-gap">
    <RunningString runningText={'Trusted by'} />
    <div class="container container--no-side-spacing">
      <RunningIcons />
    </div>
  </div>
</div>

<style>
  @media (max-width: 991px) {
    .why-ccg .row {
      gap: var(--spacing-s);
    }
  }
  @media (max-width: 767px) {
    .why-ccg {
      gap: var(--spacing-m);
    }
    .why-ccg .row {
      gap: var(--spacing-m);
    }
  }
  @media (max-width: 480px) {
    .why-ccg .row {
      flex-direction: column;
    }
  }
  @media (min-width: 1280px) {
    .why-ccg .row {
      gap: var(--spacing-2xl);
    }
  }
  
</style>