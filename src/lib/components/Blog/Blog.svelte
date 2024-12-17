<script lang=ts>
  import './blog.css';
  
  import BlogArrow from "$lib/assets/images/icons/BlogArrow.svelte";
  interface Props {
    imgUrl?:string,
    blogList?:{
      title: string,
      linkToPage: string,
      category: string,
      categoryLink: string,
      date: string,
      time: string
    }[]
  }

  let { imgUrl, blogList }:Props = $props();
</script>

<div class="blog-block">
  {#if imgUrl}
    <div class="blog-block__item blog-block__item--img">
      <img src={imgUrl} alt="">
    </div>
  {/if}
  {#if blogList}
    <div class="blog-block__item">
      <div class="blog-list">
        {#each blogList as item}
          <div class="blog-list__item">
            {#if item.title}
              <a class="blog-list__title" href={item.linkToPage}>
                <h3>
                  {item.title}
                </h3>
                <span class="blog-list__arrow">
                  <BlogArrow />
                </span>
              </a>
            {/if}
            <div class="blog-list__meta">
              {#if item.category}
                <a href={item.categoryLink}>{item.category}</a>
              {/if}
              <div class="blog-list__date">
                {#if item.date}
                <span>{item.date}</span>
                {/if}
                {#if item.time}
                  <span>{item.time}</span>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>