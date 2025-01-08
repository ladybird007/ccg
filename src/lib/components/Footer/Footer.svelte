<script>
  import Address from '$lib/components/Address/Address.svelte';
  import Button from '$lib/components/Button/Button.svelte';

  import Linkedin from '$lib/assets/images/socials/Linkedin.svelte';
  import Youtube from '$lib/assets/images/socials/Youtube.svelte';
  import Facebook from '$lib/assets/images/socials/Facebook.svelte';
  import BigArrow from '$lib/assets/images/icons/BigArrow.svelte';

  import './footer.css';
</script>

<footer class="footer">
    <div class="container">
      <div class="footer__top row justify-space-between align-flex-end">
        <div class="col">
          <a class="footer__large-link" href="/book-a-call">Let's chat.
            <BigArrow />
          </a>
          <h3>
            Choosing the right agency is an investment in success.
          </h3>
        </div>
        <div class="col">
          <Button
            text={`Book a Strategy Call`}
            link={`/book-a-call`}
            typeClass={`primary`}
          />
        </div>
      </div>
      <div class="footer__bottom row justify-space-between">
        <div class="col">
          <ul class="footer__menu text-light">
            <li><a href="/about">About</a></li>
            <li><a href="/industries/medicare">Industries</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact-us">Contact</a></li>
            <li><a href="/our-work">Our Work</a></li>
            <li><a href="/about/team">Careers</a></li>
          </ul>
        </div>
        <div class="col direction-flex-colimn justify-space-between">
          <div class="socials">
            <a class="socials__link" href="https://www.linkedin.com/company/cummings-creative-group-ccg/about/" target="_blank">
              <Linkedin />
            </a>
            <!--a class="socials__link" href="https://youtube.com" target="_blank">
              <Youtube />
            </a-->
            <a class="socials__link" href="https://www.facebook.com/ccgideas/" target="_blank">
              <Facebook />
            </a>
          </div>

          <Address />
        </div>
      </div>
    </div>
</footer>