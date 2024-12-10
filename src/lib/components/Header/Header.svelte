<script>
    import '../Header/header.css';
    import Logo from '$lib/assets/images/Logo.svg';

    console.log(Logo);
</script>

<header class="header">
  <div class="container">
    <div class="header__column">
      <div class="navigation">
        <ul>
          <li>
            <a href="/" class="logo">
              <img src={Logo} alt="CCG" />
            </a>
          </li>
          <li>
            <span>Services</span>
            <div class="sub-menu">
              <ul>
                <li><a href="/services/digital-marketing">Digital Marketing</a></li>
                <li><a href="/services/strategy">Strategy</a></li>
                <li><a href="/services/marketing">Marketing</a></li>
                <li><a href="/services/web-design">Web Design</a></li>
                <li><a href="/services/ux-design">UX Design</a></li>
                <li><a href="/services/enterprise-software">Enterprise Software</a></li>
              </ul>
            </div>
          </li>
          <li>
            <span>Industries</span>
            <div class="sub-menu">
              <ul>
                <li><a href="/industries/b2b">B2B</a></li>
                <li><a href="/industries/b2c">B2C</a></li>
                <li><a href="/industries/medical">Medical</a></li>
                <li><a href="/industries/medicare">Medicare</a></li>
              </ul>
            </div>
          </li>
          <li><a href="/our-work">Our Work</a></li>
          <li>
            <span>About</span>
            <div class="sub-menu">
              <ul>
                <li><a href="/about/about">About</a></li>
                <li><a href="/about/team">Team</a></li>
              </ul>
            </div>
          </li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      
    </div>
    
    <div class="header__column">
      <div class="navigation">
        <ul>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a class="btn btn--primary" href="/book-a-call">Book a Strategy Call</a></li>
          <li>
            <div class="switch-theme js-switch-theme"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>