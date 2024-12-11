<script>
  import TopSection from "$lib/components/TopSection/TopSection.svelte";

  import VideoPlay from '$lib/assets/images/home/VideoPlay.jpg';

  let sectionDetails ={
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
    imgUrl: VideoPlay
  }
</script>

<TopSection {...sectionDetails} />