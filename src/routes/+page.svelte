<script> 
  import TopSection from "$lib/components/TopSection/TopSection.svelte";
  import ResultsSection from "$lib/components/ResultsSection/ResultsSection.svelte";
  import TextBlock from "$lib/components/TextBlock/TextBlock.svelte";
  import IconTextCard from "$lib/components/IconTextCard/IconTextCard.svelte";
  import IconList from "$lib/components/IconList/IconList.svelte";
  import RunningString from "$lib/components/RunningString/RunningString.svelte";
  import RunningIcons from "$lib/components/RunningIcons/RunningIcons.svelte";
  import ImageTextRow from "$lib/components/ImageTextRow/ImageTextRow.svelte";
  import Carousel from '$lib/components/Carousel/Carousel.svelte';
  import Popup from '$lib/components/Popup/Popup.svelte';
  import Button from "$lib/components/Button/Button.svelte";

  import './index.css';

  import VideoPlay from '$lib/assets/images/home/VideoPlay.jpg';
  import WhyPeople from '$lib/assets/images/home/WhyPeople.svg';
  import WhyExperience from '$lib/assets/images/home/WhyExperience.svg';
  import WhyWork from '$lib/assets/images/home/WhyWork.svg';
  import RowChoosePlan from '$lib/assets/images/home/RowChoosePlan.png';
  import RowPartnership from '$lib/assets/images/home/RowPartnership.png';
  import RowCaseStudies from '$lib/assets/images/home/RowCaseStudies.png';
  import RowGreenBg from '$lib/assets/images/home/RowGreenBg.png';
  import RowTealBg from '$lib/assets/images/home/RowTealBg.png';

  import CCGWebHero from '$lib/assets/video/CCGWebHero.mp4';

  const pageTitle =  `CCG`;

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
    posterUrl: VideoPlay,
    videoUrl: CCGWebHero,
    popupBtnMobile: true,
    scrollBtn: true
  }

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
  }

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
            url: '/case-study',
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

  let imageTextRows = {
    rows: [
      {
        addClassCol: `teal`,
        colImgBgUrl: RowTealBg,
        imgUrl: RowChoosePlan,
        preHeadeline: `Medicare Advantage Marketing`,
        mainHeadline: `We speak Medicare Advantage.`,
        mainText: `With over a decade of experience in MA, we understand the complexities of navigating regulatory compliance and a competitive marketplace. Not only do we speak the same language as you do, but our goal-focused strategies go beyond the funnel, using data-driven insights to find and keep your next best members.`,
        buttons: [
          {
            url: '/industries/medicare',
            text: 'More About Medicare',
            type: 'outline'
          }
        ]
      },
      {
        addClassCol: `green`,
        colImgBgUrl: RowGreenBg,
        imgUrl: RowPartnership,
        preHeadeline: `B2B Marketing`,
        mainHeadline: `Where Precision Meets Partnership`,
        mainText: `B2B marketing for industrial spaces comes with its own set of challenges—specialized needs, a focused audience, and high stakes. The relationships matter more, and the margin for error is smaller. That's where we come in. Ultimately, we deliver the results you need for sustainable growth.`,
        buttons: [
          {
            url: '/industries/b2b',
            text: 'More About B2B Marketing',
            type: 'outline'
          }
        ]
      },
    ]
  }

  let carouselDetails = [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      author: `John`,
      position: `Marketing Director`
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor`,
      author: `Jill`,
      position: `VP, Global Sales`
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      author: `Jack`,
      position: `Director, e-Commerce`
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor`,
      author: `Jill`,
      position: `VP, Global Sales`
    }
  ]

</script>


<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

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

  

  <div class="section section--light-grey section--no-vertical-spacing">
    <div class="container container--full-width">
      {#if imageTextRows}
        {#each imageTextRows.rows as rowItem}
          <ImageTextRow {...rowItem} />
        {/each}
      {/if}
    </div>
  </div>

  <div class="section case-studies-section">
    <RunningString runningText={"Don't take our word for it."} />
    <div class="container section__content">
      <p class="text-simple pre-headline">Case Studies</p>
      <h2>Don't just take our word for it.</h2>
      
      <div class="row align-center case-studies-section__row">
        <div class="col">
          <img src={RowCaseStudies} alt="">
        </div>
        <div class="col col--text section__content">
          <h3>
            310% Increase in YOY AEP Lead Volume for Viva Medicare 
          </h3>
          <p class="text-family">
            Learn how we drove remarkable lead volume despite navigating an unprecedented economy.
          </p>
          <Button
              text={`View Case Study`}
              link={`/case-study`}
              typeClass={`outline`}
          />
        </div>
      </div>
    </div>

    <div class="custom-slider-wrap">
      <Carousel testimonials={carouselDetails} />
    </div>
  </div>
</div>

<Popup posterUrl={topSectionDetails.posterUrl} videoUrl={topSectionDetails.videoUrl} />