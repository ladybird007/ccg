<script lang="ts">
  import Tags from "$lib/components/Tags/Tags.svelte";

  let postDetails = {
    title: `A New Age of New-to-Medicare Marketing`,
    author: {
      name: `Sam Humphries`,
      url: `/about/SamHumphries`
    },
    meta: {
      date: `Jul 12 2024`,
      time: `3 min read`
    },
    tags: [
      {
        text: `Strategic Consulting`,
        url: `/services/strategy`
      },
      {
        text: `UI/UX`,
        url: `/services/ux-design`
      }
    ],
  }
</script>

<div class="section section--light-grey">
  <div class="container container--small section__content">
    <Tags tags={postDetails.tags} tagsColor='orange' />
    <h1>{postDetails.title}</h1>
    <div class="post-meta">
      <span>by <a href={postDetails.author.url}>{postDetails.author.name}</a></span>
      <span class="text-grey">{postDetails.meta.date}</span>
      <span class="text-grey">{postDetails.meta.time}</span>
    </div>
  </div>
</div>

<div class="section post-content">
  <div class="container container--small section__content">
    <p class="text-callout">
      In a landscape marked by fierce competition and slow-climbing switching rates, 
      N2M stands as the low-hanging fruit. But the traditional market entrant is changing. 
    </p>

    <div>
      <p>
        According to Deft Research, current economic conditions and the rising cost of 
        living have led many beneficiaries to delay retirement until the age of 66 or 
        67 to max their social security benefits. And when they do retire, many are 
        looking at Medicare Advantage as the preferred option for its affordability.<sup>1</sup> 
      </p>
  
      <p>
        But marketing to this group requires a new way of thinking as these 
        “trailing boomers” look a lot different than their predecessors.
      </p>
  
      <ul>
        <li>
          Many are choosing to stay put after retirement rather than moving to warmer climates.<sup>2</sup>
        </li>
        <li>
          They're more tech-savvy.<sup>2, 3</sup>
        </li>
        <li>
          They spend less discretionary money on travel and leisure as many are still paying mortgages and supporting children at home.<sup>3</sup>
        </li>
        <li>
          They're more trusting of family and friends when it comes to health plan information.<sup>3</sup>
        </li>
      </ul>
  
      <p>
        While we certainly aren't underscoring the importance of marketing to T65s, if Medicare 
        marketers want to play in the space, they'll have to expand their strategies to resonate 
        with these late retirees. But without a targeting strategy, reaching this audience can 
        lead to flat messages and inefficient spending. Here is how we do it:
      </p>
    </div>

    <div>
      <h2>1. Nurture. Nurture. Nurture.</h2>
      <p>
        Later retirements means a longer sales cycle. Don't abandon this audience after 
        their 65th birthday. Leverage data to find and target those working past 65 with 
        messages and strategies created specifically for them.
      </p>
    </div>

    <div>
      <h2>2. Level up your digital.</h2>
      <p>
        As Baby Boomers are entering the market, digital literacy is on the rise. So too 
        must our marketing strategies rise to the occasion. We supplement tried-and-true 
        traditional marketing with a robust digital strategy that uses demographic, 
        behavioral and intent data to find them where they are.
      </p>
    </div>

    <div>
      <h2>3. Stress value.</h2>
      <p>
        With less discretionary income, saving money has become even more important. 
        Lead with benefits that save money, like $0 to low premiums and Extra Help programs.
      </p>
    </div>

    <div>
      <h2>4. Lean into testimonials.</h2>
      <p>
        Many of today's seniors can't afford to make the wrong decisions when it comes to 
        their health coverage. So when choosing a Medicare plan, they're relying on the 
        people they trust most for the best advice - family and friends. Tap into 
        testimonials from your members' to create compelling content Trailing-Edgers 
        can trust.
      </p>
    </div>
    <p>
      Ready to level-up your N2M program? CCG can give you that forward thinking edge. 
      With market share on the line, there is no time to waste.
      <a href="/contact-us">Contact us today.</a>
    </p>

    <div class="post-disclaimers">
      <p>
        <sup>1</sup> Medicare age-in study. Deft Research. 
        <a href="https://deftresearch.com/medicare-age-in-study/" target="_blank">https://deftresearch.com/medicare-age-in-study/</a>
      </p>
      <p>
        <sup>2</sup> Read, L., & Cruse, C. (2017). Understanding the next wave of Medicare enrollees. Deloitte Center for Health Solutions.
      </p>
      <p>
        <sup>3</sup> Fleming, J. H. (2015, January 30). Baby Boomers are opening their wallets. Gallup.com.
        <a href="https://news.gallup.com/businessjournal/181367/baby-boomers-opening-wallets.aspx" target="_blank">https://news.gallup.com/businessjournal/181367/baby-boomers-opening-wallets.aspx</a>
      </p>
    </div>

    <div class="post-tags">
      <Tags tags={postDetails.tags} />
    </div>
  </div>
</div>