<script>
  import '$lib/assets/css/form.css';
  import '../contact-us/contact-us.css';

  import HeroBg from '$lib/assets/images/contact-us/HeroBg.svg';
  import Brianna from '$lib/assets/images/book-call/Brianna.png';
</script>

<div class="contact">
  <div class="hero-section">
    <div class="container">
      <h1>Book a Strategy Call</h1>
    </div>
    <img class="hero-section__img" src={HeroBg} alt="">
  </div>

  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col section__content">
          <h2>Book a <span class="headline-highlight">FREE</span> Strategy Session with our team of experts.</h2>
          <p class="text-emphasis">
            From Medicare Advantage strategies to industry-disrupting apps, we can help strategize a plan of action based on your business needs. We fully scope and guarantee our quotes so there are never any surprises.
          </p>
          <div class="speak-with">
            <div class="speak-with__text">
              <p class="text-black">Speak with Brianna</p>
              <p class="text-family">
                We're real people. Never bots. Reach out for an introductory call.
              </p>
              <a href="/contact-us" class="btn btn--outline">Contact Brianna</a>
            </div>
            <div class="speak-with__photo">
              <img src={Brianna} alt="">
            </div>
          </div>
        </div>
        <div class="col">
          <div class="form form--wide">
            <h3 class="from__headline">Fill out the form to book a call today.</h3>
            <form action="#">
              <div class="form__grid">
                <div class="form__row">
                  <div>
                    <label for="first-name">First name*</label>
                    <input type="text" name="fisrt-name" placeholder="Sam" required />
                  </div>
                  <div>
                    <label for="last-name">Last name*</label>
                    <input type="text" name="last-name" placeholder="Humphries" required />
                  </div>
                </div>
                <div class="form__row">
                  <div>
                    <label for="email">Your Email Address *</label>
                    <input type="email" name="email" placeholder="info@ccgideas.com" required />
                  </div>
                  <div>
                    <label for="phone">Your Phone Number</label>
                    <input type="number" name="phone" placeholder="(205) 123-4567" />
                  </div>
                </div>
                <div class="form__row">
                  <div>
                    <label for="company-name">Company Name</label>
                    <input type="text" name="company-name" placeholder="Company LLC" />
                  </div>
                  <div>
                    <label for="company-phone">Company Phone Number</label>
                    <input type="number" name="company-phone" placeholder="(205) 123-4567" />
                  </div>
                </div>
                <div>
                  <label for="message">Message</label>
                  <textarea name="message" placeholder="From a brand refresh to an industry-disrupting app, let us know what you have in mind. We fully scope and guarantee our quotes so there are never any surprises."></textarea>
                </div>
                <div>
                  <p class="text-semibold">How do you think we could help?</p>
                  <ul class="checkbox-list">
                    <li>
                      <label class="checkbox">
                        <input type="checkbox">
                        <span class="checkbox__icon"></span>
                        Business Strategy
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox">
                        <span class="checkbox__icon"></span>
                        Website Design
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox">
                        <span class="checkbox__icon"></span>
                        Branding
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox">
                        <span class="checkbox__icon"></span>
                        Digital Marketing
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox">
                        <span class="checkbox__icon"></span>
                        Mobile App Design
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox">
                        <span class="checkbox__icon"></span>
                        Website Audit
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="align-center">
                  <input type="submit" value="Submit" class="btn btn--primary">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>