<script>
    import TopSection from "$lib/components/TopSection/TopSection.svelte";
  
    import VideoPlay from '$lib/assets/images/medicare/VideoPlay.jpg';
  
    let sectionDetails ={
      preHeadeline: `Medicare Advantage Marketing`,
      mainHeadline: `Real Medicare Advantage Strategies`,
      subHeadline:  `We deliver Medicare Advantage marketing that's all about results. No gimmicks. Just straightforward, data-first strategies designed to find and keep your best members.`,
      buttons: [
        {
          url: '/book-a-call',
          text: 'Book a Strategy Call',
          type: 'secondary'
        },
        {
          url: '/our-work',
          text: 'Our Medicare Work',
          type: 'outline'
        }
      ],
      imgUrl: VideoPlay
    }
  </script>
  
  <TopSection {...sectionDetails} />