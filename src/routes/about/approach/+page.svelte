<script>
  import ClientsSection from '$lib/components/ClientsSection/ClientsSection.svelte';
  import Accordion from '$lib/components/Accordion/Accordion.svelte';

  import './approach.css';
  
  import HeroBg from '$lib/assets/images/approach/HeroBg.svg';
  import HeroBgMobile from '$lib/assets/images/approach/HeroBgMobile.svg';
  import ImageUnderstand from '$lib/assets/images/approach/ImageUnderstand.svg';

  let accordionItems = [
      {
        key: `01`,
        title: `Evaluate`,
        text: `Some text`
      },
      {
        key: `02`,
        title: `Understand`,
        text: `
        <p>In this step, we take the insights gained during the Evaluate phase and transform them into smart, actionable goals. These targets aren’t just numbers on a spreadsheet; they are realistic objectives designed to create success metrics and keep everyone accountable.</p>
        <p>We then develop targeted budgets and strategies that seamlessly integrate traditional, digital, and web marketing. Our campaigns are designed to engage your audience where they are, driving conversions and, most importantly, revenue. By maximizing resources effectively, we ensure that every dollar invested contributes to your growth.</p>`,
        image: ImageUnderstand,
        iconList: {
          type: 'arrow',
          listItems: [
            {
              link: `/`,
              text: `Goal Setting`
            },
            {
              link: `/`,
              text: `Budget Planning`
            },
            {
              link: `/`,
              text: `Strategic/Media Planning`
            },
            {
              link: `/`,
              text: `Brand Positioning`
            },
            {
              link: `/`,
              text: `Executive Consulting`
            },
            {
              link: `/`,
              text: `Strategic Consulting`
            }
          ]
        }
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
</script>

<div class="approach">
  <div class="hero-section">
    <div class="container section__content">
      <p class="text-simple pre-headline">About</p>
      <h1>Our Approach</h1>
    </div>
    <img class="hero-section__img hero-section__img--lines mobile-hidden" src={HeroBg} alt="">
    <img class="hero-section__img hero-section__img--diagram mobile-visible" src={HeroBgMobile} alt="">
  </div>

  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col col--flex-1">
          <h2>
            Are we a consulting firm or a performance marketing agency?  
            <span class="headline-highlight">Yes and Yes.</span>
          </h2>
        </div>
        <div class="col col--flex-1">
          <p>
            At CCG, we are all of the above. We are the definition of end-to-end, because we believe that every exceptional strategy is founded in research and understanding. 
          </p>
          <p>
            All of our strategies begin and end with data. Check out our approach:
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="section section--light-grey">
    <div class="container">
      <Accordion accordionItems={accordionItems} />
    </div>
  </div>

  <ClientsSection />
</div>