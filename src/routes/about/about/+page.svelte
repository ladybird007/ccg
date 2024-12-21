<script>
  import { colorScheme } from '$lib/store';
  import RunningString from '$lib/components/RunningString/RunningString.svelte';
  import TextBlock from '$lib/components/TextBlock/TextBlock.svelte';
  import IconTextCard from "$lib/components/IconTextCard/IconTextCard.svelte";
  
  import HeroBg from '$lib/assets/images/about/HeroBg.svg';
  import HeroBgMobile from '$lib/assets/images/about/HeroBgMobile.svg';
  import ValuesLight from '$lib/assets/images/about/ValuesLight.png';
  import ValuesDark from '$lib/assets/images/about/ValuesDark.png';
  import MissionRadicallyHonest from '$lib/assets/images/about/MissionRadicallyHonest.svg';
  import MissionRelationships from '$lib/assets/images/about/MissionRelationships.svg';
  import MissionOneSize from '$lib/assets/images/about/MissionOneSize.svg';
  import MissionAsk from '$lib/assets/images/about/MissionAsk.svg';

  import './about.css';

  const pageTitle =  `About`;

  let MissionText = {
    preHeadeline: `Our Mission, Vision & Core Values`,
    mainHeadline: `We've put a lot of thought into what it is that makes us who we are.`,
    mainText: `
      <strong>MISSION   |</strong>   Our goal is to ignite lasting success for our clients and employees, transforming visions into reality and fostering a future where everyone thrives.  
      <strong>VISION   |</strong>   We embrace an entrepreneurial spirit, driven by passion, excellence, and results, that empowers our clients and uplifts our employees.`,
  }

  let MissionCards = {
    cards: [
      {
        icon: MissionRadicallyHonest,
        headline: `Radically Honest`,
        text: `We believe in transparency and candor. We communicate openly, even when it's uncomfortable. Our commitment to honesty builds trust within our team and our clients.`
      },
      {
        icon: MissionRelationships,
        headline: `Be Kind. Value Relationships.`,
        text: `Kindness is at the heart of our interactions. We treat each other with respect, empathy, and compassion. We value relationships, understanding that strong connections lead to better collaboration and results.`
      },
      {
        icon: MissionOneSize,
        headline: `One Size Fits None`,
        text: `We recognize that every situation is unique. We tailor our solutions to fit the specific needs of our clients. One-size-fits-all approaches don't work; we adapt and innovate to create customized solutions.`
      },
      {
        icon: MissionAsk,
        headline: `Ask Why & Dig In`,
        text: `Curiosity drives us forward. We don’t settle for surface-level understanding. Instead, we ask probing questions, dig into the details, and seek deeper insights. Our commitment to continuous learning fuels our growth and drives results.`
      }
    ]
  }
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<div class="about">
  <div class="hero-section">
    <div class="container">
      <h1>{pageTitle}</h1>
    </div>
    <img class="hero-section__img hero-section__img--dots2 mobile-hidden" src={HeroBg} alt="">
    <img class="hero-section__img hero-section__img--dots2 mobile-visible" src={HeroBgMobile} alt="">
  </div>

  <div class="section intro">
    <div class="container">
      <div class="section__content">
        <h2>
          Since 1991, CCG has been at the forefront of business evolution, blending the best of consulting and marketing.
        </h2>
        <div class="two-columns-text">
          <p>
            With a proven track record of creating results-first strategies, we bring together 
            a team of dynamic problem solvers with expertise across digital, traditional, web design, 
            and consulting. At the heart of our culture is a commitment to sustainable growth—whether 
            it's healthcare, industrial and everything in between. 
          </p>
          <p>
            This relentless pursuit of better results fuels everything we do, ensuring we deliver impactful, 
            adaptive solutions that drive success for our clients.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="section mission">
    <RunningString runningText={'Radically Honest, Creative, & Smart, Not Smug'} />
    <div class="container container--small text-center">
      <TextBlock {...MissionText} />
    </div>
    <div class="container mission__values">
      <img src={$colorScheme === 'dark' ? ValuesDark : ValuesLight} alt="Values">
    </div>
    <div class="container">
      <div class="mission__cards">
        <IconTextCard {...MissionCards} />
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container section__content">
      <p class="text-simple pre-headline">
        Meet the Team
      </p>
      <div class="row justify-space-between">
        <h2>Meet our team of problem-solvers.</h2>
        <a href="/about/team" class="btn btn--outline">Meet the Team</a>
      </div>

      <div>Slider</div>
    </div>
  </div>

</div>