<script>
  import {onMount} from 'svelte';
  import '../Header/header.css';
  import Logo from '$lib/assets/images/Logo.svg';
  import SmallArrow from '$lib/assets/images/icons/SmallArrow.svelte';

  let activeSwitch = false;

  function switchColorScheme () {
    activeSwitch = !activeSwitch;

    if (activeSwitch) {
      html.style.setProperty("color-scheme", "light");
    } else {
      html.style.setProperty("color-scheme", "dark");
    }
    
  }

  onMount(() => {
    /*const navItemBtns = document.querySelectorAll('.js-menu-btn');
          
    navItemBtns.forEach(function(btn) {
      const navItemIcon = document.createElement('svg');

      navItemIcon.setAttribute('width', '10');
      navItemIcon.setAttribute('height', '6');
      navItemIcon.setAttribute('viewBox', '0 0 10 6');
      navItemIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      navItemIcon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M9.31265 1.92778L5.25163 5.56245L0.970703 1.9734L2.25563 0.440768L5.20884 2.91668L7.97883 0.4375L9.31265 1.92778Z" fill="#100F08"/>`;
      console.log(navItemIcon);
      btn.appendChild(navItemIcon);
    });*/
  });
</script>

<header class="header">
  <div class="container">
    <div class="row justify-space-between align-center">
      <div class="col">
        <div class="navigation">
          <ul class="navigation__list">
            <li>
              <a href="/" class="logo">
                <img src={Logo} alt="CCG" />
              </a>
            </li>
            <li>
              <span class="navigation__sub-menu-btn js-menu-btn">
                Services
                <SmallArrow />
              </span>
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
              <span class="navigation__sub-menu-btn js-menu-btn">
                Industries
                <SmallArrow />
              </span>
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
              <span class="navigation__sub-menu-btn js-menu-btn">
                About
                <SmallArrow />
              </span>
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
      
      <div class="col">
        <div class="navigation">
          <ul class="navigation__list">
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a class="btn btn--primary" href="/book-a-call">Book a Strategy Call</a></li>
            <li>
              <button class="switch-theme" class:dark={activeSwitch} on:click="{() => switchColorScheme () }" aria-label='switch'></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>