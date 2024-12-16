<script>
  import { colorScheme } from '$lib/store';  
  import TopSection from "$lib/components/TopSection/TopSection.svelte";

  import SmallOrangeCircle from '$lib/assets/images/icons/SmallOrangeCircle.svg';
  import TopImageLight from '$lib/assets/images/digitalMarketing/topImageLight.svg';
  import TopImageDark from '$lib/assets/images/digitalMarketing/topImageDark.svg';
  import '../services.css';


  let sectionDetails = {
    preHeadeline: `Digital Marketing`,
    mainHeadline: `Turn ad spend into revenue. `,
    subHeadline:  `We focus on precise targeting to connect with your highest-value prospects exactly where they are.`,    
  }
</script>
<div class="services">
  <TopSection {...sectionDetails} imgUrl={$colorScheme === 'dark' ? TopImageDark : TopImageLight} />

  <div class="section">
    <div class="container">
      <div class="section__content">
        <p class="text-simple in-line"><img src={SmallOrangeCircle} alt=""> How We Stand Out</p>
        <h2>
          Create scroll-stopping content.
        </h2>
        <div class="two-columns-text">
          <p>
            Using broad blanket digital strategies is like flushing dollars away. We don't do that. 
            Our advanced tech stack and expert digital strategists ensure every dollar works hard for you, 
            maximizing reach without compromising quality. See why our clients trust us with more than 
            $XXM in ad spend.
          </p>
          <p>
            We use strategies that grab attention—snackable, impactful content designed for quick consumption; 
            unexpected visuals that break the mold and create interest; and emotional storytelling that forges 
            connections and inspires action. The result? Ads that make users pause, engage, and convert. 
          </p>
        </div>
      </div>
    </div>
  </div>
</div>