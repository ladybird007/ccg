<script>  
  import TopSection from "$lib/components/TopSection/TopSection.svelte";
  import VideoPlay from '$lib/assets/images/home/VideoPlay.jpg';
  import ResultsSection from "$lib/components/ResultsSection/ResultsSection.svelte";

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

  let resultsSectionProps = {
    runningText: `Real Results. No Glitter.`,
    mainHeadline: `Just Marketing That Works.`,
    preHeadeline: `Our Process`,
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

</script>

<div class="home">
  <TopSection {...topSectionDetails} />
  <ResultsSection {...resultsSectionProps} />
</div>