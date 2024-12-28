<script>
  import { onMount } from 'svelte';
  import { colorScheme, slidesCount } from '$lib/store';

  import CounterSection from '$lib/components/CounterSection/CounterSection.svelte';
  import Tags from '$lib/components/Tags/Tags.svelte';
  import ImageTextRow from '$lib/components/ImageTextRow/ImageTextRow.svelte';
  import TextBlock from '$lib/components/TextBlock/TextBlock.svelte';
  import Carousel from '$lib/components/Carousel/Carousel.svelte';

  import './case-study.css';

  import HeroBg from '$lib/assets/images/caseStudy/HeroBg.svg';
  import ChallengeImgLight from '$lib/assets/images/caseStudy/ChallengeImgLight.png';
  import ChallengeImgDark from '$lib/assets/images/caseStudy/ChallengeImgDark.png';
  import SolutionImgLight from '$lib/assets/images/caseStudy/SolutionImgLight.png';
  import SolutionImgDark from '$lib/assets/images/caseStudy/SolutionImgDark.png';
  import LaptopLight from '$lib/assets/images/caseStudy/LaptopDark.png';
  import LaptopDark from '$lib/assets/images/caseStudy/LaptopDark.png';

  import Slide1 from '$lib/assets/images/caseStudy/slider/Slide1.png';
  import Slide2 from '$lib/assets/images/caseStudy/slider/Slide2.png';
  import Slide3 from '$lib/assets/images/caseStudy/slider/Slide3.png';

  const pageTitle = `Legacy Cabinets`;

  let counterSectionDetails = {
    sectionClass: `section--light-grey`,
    mainText: `Legacy Cabinets partnered with CCG to simplify their complex product line and elevate their online user experience. By streamlining navigation and enhancing product discovery, we transformed their website, ultimately driving higher user satisfaction and engagement.`,
    numbers: [
      {
        number: 6,
        text: `Years in new profit from improved order management`
      }, {
        number: 140,
        text: `Years in new profit from improved order management`
      }, {
        number: 20,
        text: `Projects in new profit from improved order management`
      }
    ]
  }

  let tagsList = {
    tags: [
      {
        text: `Strategic Consulting`,
        url: `/services/strategy`
      },
      {
        text: `UI/UX`,
        url: `/services/ux-design`
      }
    ]
  }

  let challengeImageTextRow = {
    imgUrl: ChallengeImgLight,
    preHeadeline: `The Challenge`,
    mainHeadline: `Outdated website led to poor engagement.`,
    mainText: `Legacy Cabinets' previous website was outdated, lacking the functionality to showcase their full product range. User testing confirmed that visitors struggled with navigation and accessing product details, resulting in a poor user experience and lost engagement opportunities.`
  }

  let transformationsText = {
    preHeadeline: `The Transformation`,
    mainHeadline: `Created strategic site architecture and intuitive product detail pages`,
    mainText: `CCG began prototyping an intuitive user experience for Legacy, starting with a streamlined navigation system that categorized their complex cabinet lines. We also designed detailed product wireframes to effectively organize Legacy’s extensive offerings, including wood species, door styles, and finish options.`,
  }

  let solutionImageTextRow = {
    imgUrl: SolutionImgLight,
    preHeadeline: `The Solution`,
    mainHeadline: `Maintaining performance on smaller screens`,
    mainText: `Once in development, CCG's UX and dev teams worked together to optimize the mobile experience, ensuring the robust site design was fully responsive and easy to navigate across all screen sizes. We focused on maintaining performance without compromising functionality on smaller devices.`
  }

  let resultsText = {
    preHeadeline: `The Results`,
    mainHeadline: `The Final Product`,
    mainText: `The end result was a site that reflected the quality and aesthetics of the Legacy brand, with a more intuitive user experience that made it easy to explore their expansive cabinet lines. We also integrated advanced tools to enhance functionality and boost user engagement.`,
  }

  let carouselSlides = [
    {
      url: Slide1
    },
    {
      url: Slide2
    },
    {
      url: Slide3
    },
  ]

  const debounce = (func, delay) => {
		let timer;

		return function () {
			const context = this;
			const args = arguments;
			clearTimeout(timer);
			timer = setTimeout(() => func.apply(context, args), delay);
		};
	};
	
	const setWindowWidth = () => {    		
    let count = 0
    if (window.innerWidth < 768) {
      count = 1
      } else if (window.innerWidth > 1279) {
        count = 3
      } else {
        count = 2
      }         
      slidesCount.update(v => v = count);
	};	

  onMount(() => {		
		window.addEventListener('resize', setWindowWidth);
		
		return () => {
			window.removeEventListener('resize', setWindowWidth);
		}
	}); 
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<div class="our-work">
  <div class="hero-section">
    <div class="container">
      <Tags {...tagsList} tagsColor="light-orange" />
      <h1>{pageTitle}</h1>
    </div>
    <img class="hero-section__img hero-section__img--lines" src={HeroBg} alt="">
  </div>

  <CounterSection {...counterSectionDetails}/> 

  <div class="section section--no-vertical-spacing challenge-section">
    <div class="container">
      <ImageTextRow {...challengeImageTextRow} imgUrl={$colorScheme === 'dark' ? ChallengeImgDark : ChallengeImgLight} />
    </div>
  </div>

  <div class="section">
    <div class="container">
      <TextBlock {...transformationsText} />
    </div>
    <Carousel images={carouselSlides} /> 
  </div>

  <div class="section testimonials">
    <div class="container">
      <p class="text-callout">
        Legacy Cabinets partnered with CCG to simplify their complex product line and elevate their online user experience. By streamlining navigation and enhancing product discovery, we transformed their website, ultimately driving higher user satisfaction and engagement.”
      </p>
      <div class="testimonials__meta">
        <span class="text-semibold">John</span>
        <span class="text-light">Marketing Director</span>
      </div>
    </div>
  </div>

  <div class="section section--no-vertical-spacing seaction--light-grey">
    <div class="container">
      <ImageTextRow {...solutionImageTextRow} imgUrl={$colorScheme === 'dark' ? SolutionImgDark : SolutionImgLight} />
    </div>
  </div>

  <div class="section">
    <div class="container">
      <TextBlock {...resultsText} />
    </div>
    <div class="container">
      <img src={$colorScheme === 'dark' ? LaptopDark : LaptopLight} alt="">
    </div>
  </div>
</div>