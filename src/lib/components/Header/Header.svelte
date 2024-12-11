<script>
  import {onMount} from 'svelte';
  import { slide } from 'svelte/transition';
  
  import Address from '../Address/Address.svelte';
  import Logo from '$lib/assets/images/Logo.svg';
  import SmallArrow from '$lib/assets/images/icons/SmallArrow.svelte';
  import '../Header/header.css';

  
  let menuVisible = false;

  let activeSwitch = false;
  function switchColorScheme () {
    activeSwitch = !activeSwitch;
    const htmlTag = document.getElementsByTagName('html');

    if (activeSwitch) {
      htmlTag[0].style.setProperty("color-scheme", "dark");
    } else {
      htmlTag[0].style.setProperty("color-scheme", "light");
    }
    
  }

  let isExpanded = false
	function clickHandler() {
		isExpanded = !isExpanded
	}

  onMount(() => {
    
  });
</script>

<header class="header" class:fixed={menuVisible}>
  <div class="container">
    <div class="row justify-space-between align-center">
      <div class="header__col">
        <a href="/" class="logo">
          <img src={Logo} alt="CCG" />
        </a>
        <div class="navigation navigation--dropdown">
          <ul class="navigation__list">
            <li>
              <button class="navigation__sub-menu-btn" class:opened={isExpanded} on:click={clickHandler}>
                Services
                <SmallArrow />
              </button>
	
              {#if isExpanded}            
                <div class="sub-menu" transition:slide>
                  <ul>
                    <li><a href="/services/digital-marketing">Digital Marketing</a></li>
                    <li><a href="/services/strategy">Strategy</a></li>
                    <li><a href="/services/marketing">Marketing</a></li>
                    <li><a href="/services/web-design">Web Design</a></li>
                    <li><a href="/services/ux-design">UX Design</a></li>
                    <li><a href="/services/enterprise-software">Enterprise Software</a></li>
                  </ul>
                </div>
              {/if}
            </li>
            <li>
              <button class="navigation__sub-menu-btn" class:opened={isExpanded} on:click={clickHandler}>
                Industries
                <SmallArrow />
              </button>
              {#if isExpanded} 
              <div class="sub-menu" transition:slide>
                <ul>
                  <li><a href="/industries/b2b">B2B</a></li>
                  <li><a href="/industries/b2c">B2C</a></li>
                  <li><a href="/industries/medical">Medical</a></li>
                  <li><a href="/industries/medicare">Medicare</a></li>
                </ul>
              </div>
              {/if}
            </li>
            <li><a href="/our-work">Our Work</a></li>
            <li>
              <button class="navigation__sub-menu-btn" class:opened={isExpanded} on:click={clickHandler}>
                About
                <SmallArrow />
              </button>
              {#if isExpanded} 
              <div class="sub-menu" transition:slide>
                <ul>
                  <li><a href="/about/about">About</a></li>
                  <li><a href="/about/team">Team</a></li>
                </ul>
              </div>
              {/if}
            </li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </div>
      
      <div class="header__col header__col--absolute">
        <div class="navigation">
          <ul class="navigation__list">
            <li class="desktop-visible"><a href="/contact-us">Contact Us</a></li>
            <li><a class="btn btn--primary" href="/book-a-call">Book a <span class="desktop-visible">Strategy</span> Call</a></li>
            <li>
              <button class="switch-theme" class:dark={activeSwitch} on:click="{() => switchColorScheme () }" aria-label='switch'></button>
            </li>
            <li class="header__mobile-btn">
              <button class="mobile-menu-btn" aria-label="button" on:click="{() => menuVisible = !menuVisible }"><em></em></button>
            </li>
          </ul>
        </div>
      </div>

      <div class="header__mobile-contacts">
        <a href="/book-a-call" class="btn btn--primary">Book a Strategy Call</a>
        <Address />
      </div>
    </div>
  </div>
</header>