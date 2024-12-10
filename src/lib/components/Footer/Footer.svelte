<script>
  import Linkedin from '$lib/assets/images/socials/Linkedin.svelte';
  import Youtube from '$lib/assets/images/socials/Youtube.svelte';
  import Facebook from '$lib/assets/images/socials/Facebook.svelte';
  import BigArrow from '$lib/assets/images/icons/BigArrow.svelte';

  import '../Footer/footer.css'
</script>

<footer class="footer">
    <div class="container">
      <div class="footet__top row justify-space-between align-flex-end">
        <div class="col">
          <a class="footer__large-link" href="/book-a-call">
            Let's chat.
            <BigArrow />
          </a>
          <h3>
            Choosing the right agency is an investment in success.
          </h3>
        </div>
        <div class="col">
          <a href="/book-a-call" class="btn btn--primary">Book a Strategy Call</a>
        </div>
      </div>
      <div class="footer__bottom row justify-space-between">
        <div class="col">
          <ul class="footer__menu text-light">
            <li><a href="/about/about">About</a></li>
            <li><a href="/industries">Industries</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact-us">Contact</a></li>
            <li><a href="/our-work">Our Work</a></li>
            <li><a href="/blog">Careers</a></li>
          </ul>
        </div>
        <div class="col direction-flex-colimn justify-space-between">
          <div class="socials">
            <a href="https://www.linkedin.com/company/cummings-creative-group-ccg/about/" target="_blank">
              <Linkedin />
            </a>
            <a href="https://youtube.com" target="_blank">
              <Youtube />
            </a>
            <a href="https://www.facebook.com/ccgideas/" target="_blank">
              <Facebook />
            </a>
          </div>

          <div class="address text-right">
            <p>
              <a href="https://maps.app.goo.gl/S25tUb1wbBWCx4GY9" target="_blank" class="text-black">
                3616 7th Ct S <br>Birmingham, AL 35222
              </a>
            </p>
            <p>
              <a href="tel:2059391233">(205) 939-1233</a>
            </p>
          </div>
        </div>
      </div>
    </div>
</footer>