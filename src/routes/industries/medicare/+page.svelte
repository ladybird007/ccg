<script>
  import { colorScheme } from "$lib/store";
  import TopSection from "$lib/components/TopSection/TopSection.svelte";
  import ResultsSection from "$lib/components/ResultsSection/ResultsSection.svelte";
  import ImageTextRow from "$lib/components/ImageTextRow/ImageTextRow.svelte";
  import CounterSection from "$lib/components/CounterSection/CounterSection.svelte";
  import RunningString from "$lib/components/RunningString/RunningString.svelte";
  import Blog from '$lib/components/Blog/Blog.svelte';
  import Popup from '$lib/components/Popup/Popup.svelte';

  import VideoPlay from '$lib/assets/images/medicare/VideoPlay.jpg';
  import MedicareBlog from '$lib/assets/images/blog/MedicareBlog.png';
  import RowPhone from '$lib/assets/images/medicare/RowPhone.png';
  import RowTicketsLight from '$lib/assets/images/medicare/RowTicketsLight.png';
  import RowTicketsDark from '$lib/assets/images/medicare/RowTicketsDark.png';

  import PartnerWithUs from '$lib/assets/video/PartnerWithUs.mp4';

  const pageTitle = `Medicare`;

  let sectionTopDetails ={
    preHeadeline: `Medicare Advantage Marketing`,
    mainHeadline: `Real Medicare Advantage Strategies`,
    subHeadline:  `We deliver Medicare Advantage marketing that's all about results. No gimmicks. Just straightforward, data-first strategies designed to find and keep your best members.`,
    buttons: [
      {
        url: '/book-a-call',
        text: 'Book a <span class="mobile-hidden">Strategy</span> Call',
        type: 'secondary'
      },
      {
        url: '/our-work',
        text: 'Our Medicare Work',
        type: 'outline'
      }
    ],
    posterUrl: VideoPlay,
    videoUrl: PartnerWithUs,
    popupBtn: true
  }

  let resultsSectionDetails = {
    runningText: `What We Do`,
    mainHeadline: `Goodbye, aimless spending. Hello, targeted precision.`,
    preHeadeline: `Predictive Analytics`,
    mainText: `By combining your historical lead and enrollment information with our extensive third-party data sets, we identify patterns that predict future behavior. Our targeted marketing strategies then find individuals who look like your best members. The result? Better return on your investment and more members.`,
    accordionItems: [
      {
        key: `01`,
        title: `Audience Profiling`,
        text: `Some text Audience Profiling`
      },
      {
        key: `02`,
        title: `Modeling`,
        text: `We synthesize the data to create smart, goal-focused strategies.`
      },
      {
        key: `03`,
        title: `Segmentation`,
        text: `Some text Segmentation`
      },
      {
        key: `04`,
        title: `Analysis`,
        text: `Some text Analysis`
      }
    ]
  }

  let imageTextRowsDetails = {
    rows: [
      {
        imgUrl: RowPhone,
        preHeadeline: `Omnichannel Strategies`,
        mainHeadline: `Going Beyond the Funnel`,
        mainText: `We target your ideal prospects with integrated marketing strategies that use the best of traditional and digital channels to create macro- and micro-moments. By delivering the right message to the right channel at the right time, we build momentum at every touchpoint—from shopping and engagement to acquisition and retention.`
      },
      {
        preHeadeline: `Performance Creative`,
        mainHeadline: `Beneficiary-First Performance Design`,
        mainText: `We use member-based design that considers the experience, the channel and the people. The result? Creative that drives conversions. By blending time-tested cadences with consumer data, we know what to say and when to say it, creating a personalized experience that addresses individual needs rather than just demographics.`,
        buttons: [
          {
            url: '/industries/medicare',
            text: 'View All Medicare Work',
            type: 'outline'
          }
        ]
      },
    ]
  }

  let CounterSectionDetails = {
    preHeadeline: `Why CCG?`,  
    mainHeadline: `We have <span class="headline-highlight">70+ Years</span> of combined AEP experience.`, 
    numbers: [
      {
        number: 10,
        text: `Consecutive AEP and New-to-Medicare seasons`,
      },
      {
        number: 75,
        suffix: `+`,
        text: `Hours of collective HIPAA-certification and trainings (completed annually)`,
      },
      {
        number: 2.2,
        suffix: 'M',
        text: `Dollars in marketing portfolios`,
      }
    ]
  }

  let blogListDetails = {
    imgUrl: MedicareBlog,
    blogList: [
      {
        title: `From Concept to Reality: Showcasing Impactful Design Case Studies`,
        linkToPage: `/blog`,
        category: `Medicare`,
        categoryLink: `/blog`,
        date: `Oct 21`,
        time: `2 min read`
      },
      {
        title: `Designing for Humans: UX/UI Insights from Our Expert Team`,
        linkToPage: `/blog`,
        category: `Medicare`,
        categoryLink: `/blog`,
        date: `Oct 14`,
        time: `2 min read`
      },
      {
        title: `Future-Proofing Web Development: Navigating the Latest Trends`,
        linkToPage: `/blog`,
        category: `Medicare`,
        categoryLink: `/blog`,
        date: `Oct 2`,
        time: `2 min read`
      }
    ]
  }
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>
  
<div class="industries">
  <TopSection {...sectionTopDetails} />
  <ResultsSection {...resultsSectionDetails} />

  <div class="section section--light-grey section--no-vertical-spacing">
    <div class="container container--wide">
      {#if imageTextRowsDetails}
        {#each imageTextRowsDetails.rows as rowItem, index}
          {#if index === 1}
            <ImageTextRow {...rowItem} imgUrl={$colorScheme === 'dark' ? RowTicketsDark : RowTicketsLight} />
          {:else}
            <ImageTextRow {...rowItem} />
          {/if}
        {/each}
      {/if}
    </div>
  </div>

  <CounterSection {...CounterSectionDetails} />

  <div class="section">
    <RunningString runningText={'Latest From Our Blog'} />
    <div class="container">
      <Blog {...blogListDetails} />
    </div>
  </div>
</div>

<Popup posterUrl={sectionTopDetails.posterUrl} videoUrl={sectionTopDetails.videoUrl} />