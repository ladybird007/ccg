<script>
    import CounterSection from '$lib/components/CounterSection/CounterSection.svelte';

    import HeroBg from '$lib/assets/images/work/HeroBg.svg';

    let CounterSectionDetails = {
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
</script>

<div class="our-work">
  <div class="hero-section">
    <div class="container">
        <div class="tags">
            <span class="tag">Strategic Consulting</span>
            <span class="tag">UI/UX</span>
        </div>
        <h1>Legacy Cabinets</h1>
    </div>
    <img class="hero-section__img" src={HeroBg} alt="">
  </div>

  <CounterSection {...CounterSectionDetails}/>

  
</div>