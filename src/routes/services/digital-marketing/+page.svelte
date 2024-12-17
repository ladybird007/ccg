<script>
  import { colorScheme } from '$lib/store';  
  import TopSection from '$lib/components/TopSection/TopSection.svelte';
  import IconList from '$lib/components/IconList/IconList.svelte';
  import ImageTextRow from "$lib/components/ImageTextRow/ImageTextRow.svelte";
  import RunningString from "$lib/components/RunningString/RunningString.svelte";
  import Blog from '$lib/components/Blog/Blog.svelte';
  import '../services.css';

  import SmallOrangeCircle from '$lib/assets/images/icons/SmallOrangeCircle.svg';
  import TopImageLight from '$lib/assets/images/digitalMarketing/topImageLight.svg';
  import TopImageDark from '$lib/assets/images/digitalMarketing/topImageDark.svg';
  import Icon1 from '$lib/assets/images/digitalMarketing/logos/Icon1.svg';
  import Icon2 from '$lib/assets/images/digitalMarketing/logos/Icon2.svg';
  import Icon3 from '$lib/assets/images/digitalMarketing/logos/Icon3.svg';
  import Icon4 from '$lib/assets/images/digitalMarketing/logos/Icon4.svg';
  import SocialMedia from '$lib/assets/images/digitalMarketing/SocialMedia.png';
  import BlogImg from '$lib/assets/images/blog/DigitalBlog.png';

  let sectionDetails = {
    preHeadeline: `Digital Marketing`,
    mainHeadline: `Turn ad spend into revenue. `,
    subHeadline:  `We focus on precise targeting to connect with your highest-value prospects exactly where they are.`,    
  }

  let whatWeDoList = {
    preHeadeline: `Services`,
    mainHeadline: `What We Do`,
    type: `chart`,
    listItems: [
      {
        text: `Search Engine Optimization`
      },
      {
        text: `Pay-Per-Click Advertising (PPC)`
      },
      {
        text: `Social Media Marketing`
      },
      {
        text: `Email Marketing`
      },
      {
        icon: `chart-2`,
        text: `Digital Out-of-Home (DOOH)`
      },
      {
        icon: `chart-2`,
        text: `Connected TV (CTV)`
      },
      {
        icon: `chart-2`,
        text: `Over-the-Top Advertising (OTT)`
      },
      {
        icon: `chart-2`,
        text: `Data Analytics`
      }
    ]
  }

  let logosList = [
    {
      url: Icon1,
      alt: `google`
    },
    {
      url: Icon2,
      alt: `meta`
    },
    {
      url: Icon3,
      alt: `salesforce`
    },
    {
      url: Icon4,
      alt: `klaviyo`
    },
  ]

  let imageTextRow = {
    rows: [
      {
        addClassCol: `light-grey`,
        imgUrl: SocialMedia,
        preHeadeline: `Our Work`,
        mainHeadline: `Global Health  Medicare AEP`,
        mainText: `GlobalHealth, a regional health insurance plan offering Medicare Advantage products in Oklahoma, came to CCG in need of a fresh approach. Despite their prior efforts and an ambitious lead generation plan, results had fallen short, leaving them with limited growth and an investment that didn't deliver. GlobalHealth turned to CCG to help achieve the impact they'd been striving for.`,
        buttons: [
          {
            url: '/our-work',
            text: 'View Case Study',
            type: 'outline'
          }
        ]
      }
    ]
  }

  let blogListDetails = {
    imgUrl: BlogImg,
    blogList: [
      {
        title: `From Concept to Reality: Showcasing Impactful Design Case Studies`,
        linkToPage: `#`,
        category: `Digital Marketing`,
        categoryLink: ``,
        date: `Oct 21`,
        time: `2 min read`
      },
      {
        title: `Designing for Humans: UX/UI Insights from Our Expert Team`,
        linkToPage: `#`,
        category: `Social Media`,
        categoryLink: ``,
        date: `Oct 14`,
        time: `2 min read`
      },
      {
        title: `Future-Proofing Web Development: Navigating the Latest Trends`,
        linkToPage: `#`,
        category: `Analytics`,
        categoryLink: ``,
        date: `Oct 2`,
        time: `2 min read`
      }
    ]
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

    <div class="container">
      <IconList {...whatWeDoList} />
    </div>

    {#if logosList}
      <div class="container">
        <div class="text-center">
          <h4>We only use the best to power our data.</h4>
        </div>
        <div class="logos">
          {#each logosList as logo }
            <div class="logos__item">
              <div class="logos__img">
                <img src={logo.url} alt={logo.alt}>
              </div>
            </div>
          {/each}
          {#each logosList as logo }
            <div class="logos__item">
              <div class="logos__img">
                <img src={logo.url} alt={logo.alt}>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <div class="section section--light-grey section--no-vertical-spacing">
    <div class="container container--wide">
      {#if imageTextRow}
        {#each imageTextRow.rows as rowItem}
          <ImageTextRow {...rowItem} />
        {/each}
      {/if}
    </div>
  </div>

  <div class="section">
    <RunningString runningText={'Latest From Our Blog'} />
    <div class="container">
      <Blog {...blogListDetails} />
    </div>
  </div>
</div>