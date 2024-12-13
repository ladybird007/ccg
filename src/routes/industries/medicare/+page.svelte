<script>
  import TopSection from "$lib/components/TopSection/TopSection.svelte";
  import ResultsSection from "$lib/components/ResultsSection/ResultsSection.svelte";
  import VideoPlay from '$lib/assets/images/medicare/VideoPlay.jpg';

  let sectionDetails ={
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
    imgUrl: VideoPlay,
    popupBtnUrl: 'modal-link'
  }

  let resultsSectionProps = {
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
</script>
  
<div class="industries">
  <TopSection {...sectionDetails} />
  <ResultsSection {...resultsSectionProps} />
</div>