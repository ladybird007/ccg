<script lang="ts">
  import RunningString from '$lib/components/RunningString/RunningString.svelte';
  import Blog from '$lib/components/Blog/Blog.svelte';

  import './blog.css';

  let { children } = $props();

  let nextPosts = {
    addClass: `in-line`,
    blogList: [
      {
        title: `From Concept to Reality: Showcasing Impactful Design Case Studies`,
        linkToPage: `/blog/post`,
        category: `Digital Marketing`,
        categoryLink: `/blog`,
        date: `Oct 21`,
        time: `2 min read`
      },
      {
        title: `Designing for Humans: UX/UI Insights from Our Expert Team`,
        linkToPage: `/blog/post-with-image`,
        category: `Social Media`,
        categoryLink: `/blog`,
        date: `Oct 14`,
        time: `2 min read`
      }
    ]
  }

</script>

<div class="post">
  {@render children()}

  <div class="section">
    <RunningString runningText={`Read What's Next`} />
    <div class="container">
      <Blog {...nextPosts} />
    </div>
  </div>
</div>





