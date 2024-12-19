<script>
  import ClientsSection from '$lib/components/ClientsSection/ClientsSection.svelte';

  import './contact-us.css';
  import '$lib/assets/css/form.css';

  import HeroBg from '$lib/assets/images/contact-us/HeroBg.svg';
  import Location from '$lib/assets/images/contact-us/Location.svg';
  import Phone from '$lib/assets/images/contact-us/Phone.svg';
  import Email from '$lib/assets/images/contact-us/Email.svg';
</script>

<div class="contact">
  <div class="hero-section">
    <div class="container">
      <h1>Contact US</h1>
    </div>
    <img class="hero-section__img" src={HeroBg} alt="">
  </div>

  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col section__content">
          <h2>Connect with our team of <span class="headline-highlight">experts.</span> </h2>
          <p class="text-emphasis">
            Do you have questions about your business strategy, marketing program or general inquires? Give us a call or simply shoot us a message and talk to real people. We’re here to help. 
          </p>
          <div>
            <h3>Reach Out </h3>
            <ul class="contact-data">
              <li>
                <span class="contact-data__icon"><img src={Location} alt=""></span>
                <a href="https://maps.app.goo.gl/S25tUb1wbBWCx4GY9" target="_blank">3616 7th Ct S Birmingham, AL 35222</a>
              </li>
              <li>
                <span class="contact-data__icon"><img src={Phone} alt=""></span>
                <a href="tel:2059391233">(205) 939-1233</a>
              </li>
              <li>
                <span class="contact-data__icon"><img src={Email} alt=""></span>
                <a href="mailto:info@ccgideas.com">Email Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="form">
            <h3 class="from__headline">How can we help?</h3>
            <form action="#">
              <div class="form__grid">
                <div>
                  <label for="full-name">Full name*</label>
                  <input type="text" name="full-name" placeholder="Sam Humphries" required />
                </div>
                <div>
                  <label for="email">Your Email Address *</label>
                  <input type="email" name="email" placeholder="info@ccgideas.com" required />
                </div>
                <div>
                  <label for="phone">Your Phone Number</label>
                  <input type="number" name="phone" placeholder="(205) 123-4567" />
                </div>
                <div>
                  <label for="company-name">Company Name</label>
                  <input type="text" name="company-name" placeholder="Company LLC" />
                </div>
                <div>
                  <label for="message">Message</label>
                  <textarea name="message" placeholder="From a brand refresh to an industry-disrupting app, let us know what you have in mind. We fully scope and guarantee our quotes so there are never any surprises."></textarea>
                </div>
                <div>
                  <input type="submit" value="Submit" class="btn btn--primary">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ClientsSection />
</div>