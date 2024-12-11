<script>
    import TopSection from "$lib/components/TopSection/TopSection.svelte";
  
    import TopImageLight from '$lib/assets/images/digitalMarketing/topImageLight.svg';
  
    let sectionDetails ={
      preHeadeline: `Digital Marketing`,
      mainHeadline: `Turn ad spend into revenue. `,
      subHeadline:  `We focus on precise targeting to connect with your highest-value prospects exactly where they are.`,
      imgUrl: TopImageLight
    }
  </script>
  
  <TopSection {...sectionDetails} />