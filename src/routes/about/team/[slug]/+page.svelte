<script>
  import { Accordion, AccordionItem } from 'svelte-collapsible';
  import RunningString from '$lib/components/RunningString/RunningString.svelte';
  import Blog from '$lib/components/Blog/Blog.svelte';

  import './team-single.css';

  import SamHumphries from '$lib/assets/images/teamSingle/SamHumphries.png';
  import TeamSingleBlog from '$lib/assets/images/blog/TEamSingleBlog.png';
  import Linkedin from '$lib/assets/images/socials/Linkedin.svelte';
  import Instagram from '$lib/assets/images/socials/Instagram.svelte';

  let userInfo = {
    firstName: `Sam`,
    lastName: `Humphries`,
    position: `Digital Creative Director`,
    linkedinUrl: ``,
    instagramUrl: ``,
    description: `
      <p>Sam is a visionary creative leader at CCG, where she oversees digital projects, sets high standards, and guides the UX team. With a strong tech background, she has developed deep expertise in digital products, specializing in user experience, design systems, and application design. Fueled by her passion for design (and Diet Coke), Sam thrives in the fast-paced world of digital technologies, always seeking new challenges to grow her skills.</p>
      <p>She holds a double BA in Journalism from Ole Miss and Art from UAB and is an active member of AIGA and AAF Birmingham. Outside of work, Sam enjoys spending time with her three Boston terriers, volunteering with the Alabama Boston Terrier Rescue, creating silkscreen art, and exploring new places each year.</p>
    `,
    photo: SamHumphries,
    questions: [
      {
        key: `1`,
        question: `Do you have a favorite quote or mantra that motivates you?`,
        answer: `Design should never say, ‘Look at me.’ It should always say, ‘Look at this.’`
      },
      {
        key: `2`,
        question: `Name 5 guests at your dream dinner party.`,
        answer: `answer`
      },
      {
        key: `3`,
        question: `What advice would you give someone entering your field?`,
        answer: `answer`
      },
    ]
  }

  let blogListDetails = {
    imgUrl: TeamSingleBlog,
    blogList: [
      {
        title: `From Concept to Reality: Showcasing Impactful Design Case Studies`,
        linkToPage: `/blog`,
        category: `Digital Marketing`,
        categoryLink: `/blog`,
        date: `Oct 21`,
        time: `2 min read`
      },
      {
        title: `Designing for Humans: UX/UI Insights from Our Expert Team`,
        linkToPage: `/blog`,
        category: `Social Media`,
        categoryLink: `/blog`,
        date: `Oct 14`,
        time: `2 min read`
      },
      {
        title: `Future-Proofing Web Development: Navigating the Latest Trends`,
        linkToPage: `/blog`,
        category: `Analytics`,
        categoryLink: `/blog`,
        date: `Oct 2`,
        time: `2 min read`
      }
    ]
  }

</script>

<svelte:head>
  <title>{userInfo.firstName} {userInfo.lastName}</title>
</svelte:head>

<div class="team-single">
  <div class="section">
    <div class="container">
      <div class="row team-single__details">
        <div class="col team-single__text">
          <a href="/about" class="text-simple pre-headline">About</a>
          <h1>{userInfo.firstName} {userInfo.lastName}</h1>
          <h3>{userInfo.position}</h3>
          <div class="team-single__photo-mobile">
            <img src={userInfo.photo} alt={`${userInfo.firstName} ${userInfo.lastName}`}>
          </div>
          <div class="text-simple team-single__socials">
            Follow Me
            <a href={userInfo.linkedinUrl}>
              <Linkedin />
            </a>
            <a href={userInfo.instagramUrl}>
              <Instagram />
            </a>
          </div>
          <div class="text-family">
            {@html userInfo.description}
          </div>
        </div>
        <div class="col team-single__photo">
          <img src={userInfo.photo} alt={`${userInfo.firstName} ${userInfo.lastName}`}>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row team-single__add-details">
        <div class="col team-single__pre-accordion">
          <h2>Get to Know <br> {userInfo.firstName}</h2>
        </div>
        <div class="col simple-accordion">
          <Accordion>
            {#each userInfo.questions as item}
              <AccordionItem key={item.key}>
                <div slot='header' class="accordion-title h4">
                  {item.question}
                </div>
                <p slot='body' class="text-family">
                  {item.answer}
                </p>
              </AccordionItem>
            {/each}
          </Accordion>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <RunningString runningText={'Our Recent Thoughts'}  />
    <div class="container">
      <Blog {...blogListDetails} />
    </div>
  </div>
</div>