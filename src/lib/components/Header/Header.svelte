<script lang="ts">  
  import { onMount } from 'svelte';
  import { colorScheme, currentNavItem } from '$lib/store';
  import { slide } from 'svelte/transition';
  
  import Address from '../Address/Address.svelte';

  import './header.css';
  
  import Logo from '$lib/assets/images/Logo.svg';
  import SmallArrow from '$lib/assets/images/icons/SmallArrow.svelte';

  let mainMenuLeft = [
    {
      key: `services`,
      url: false,
      text: `Services`,
      subMenu: [
        {
          url: `/services/digital-marketing`,
          text: `Digital Marketing`
        },
        {
          url: `/services/strategy`,
          text: `Strategy`
        },
        {
          url: `/services/marketing`,
          text: `Marketing`
        },
        {
          url: `/services/web-design`,
          text: `Web Design`
        },
        {
          url: `/services/ux-esign`,
          text: `UX Design`
        },
        {
          url: `/services/enterprise-software`,
          text: `Enterprise Software`
        }
      ]
    },
    {
      key: `industries`,
      url: false,
      text: `Industries`,
      subMenu: [
        {
          url: `/industries/b2b`,
          text: `B2B`
        },
        {
          url: `/industries/b2c`,
          text: `B2C`
        },
        {
          url: `/industries/medical`,
          text: `Medical`
        },
        {
          url: `/industries/medicare`,
          text: `Medicare`
        }
      ]
    },
    {
      key: `our-work`,
      url: `/our-work`,
      text: `Our Work`
    },
    {
      key: `about`,
      url: false,
      text: `About`,
      subMenu: [
        {
          url: `/about/about`,
          text: `About`
        },
        {
          url: `/about/team`,
          text: `Team`
        },
        {
          url: `/about/our-approach`,
          text: `Approach`
        }
      ]
    },
    {
      key: `blog`,
      url: `/blog/post`,
      text: `Blog`
    }
  ]

  
  let menuVisible = false;
  let activeSwitch = false;
  function switchColorScheme () {
    activeSwitch = !activeSwitch;

    const htmlTag = document.getElementsByTagName('html');
    if (activeSwitch) {
      htmlTag[0].style.setProperty("color-scheme", "dark");
      colorScheme.update(v => v = 'dark');
    } else {
      htmlTag[0].style.setProperty("color-scheme", "light");
      colorScheme.update(v => v = 'light');
    }        
  }

  let isExpanded1 = false,
      isExpanded2 = false,
      isExpanded3 = false;

  function clickHandler(key:number) {
    switch (key) {
      case 1:
        isExpanded2 = false,
        isExpanded3 = false;
        isExpanded1 = true;
        break;
      case 2:
        isExpanded1 = false,
        isExpanded3 = false;
        isExpanded2 = true;
        break;
      case 3:
        isExpanded1 = false,
        isExpanded2 = false;
        isExpanded3 = true;
        break;
      default:
        isExpanded1 = false,
        isExpanded2 = false,
        isExpanded3 = false;
    }
  }

  function setActivePath(name:string) {
    currentNavItem.update(v => v = name);
  }

  let activeItem = '';
  onMount(() => {
    currentNavItem.subscribe(value => {
      activeItem = value;
    });
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
            <li class:active={activeItem === 'services'} on:mouseenter={() => clickHandler(1)}>
              <button class="navigation__sub-menu-btn" class:opened={isExpanded1} >
                Services
                <SmallArrow />
              </button>
	
              {#if isExpanded1}            
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="sub-menu" transition:slide>
                  <ul>
                    <li><a href="/services/digital-marketing" on:click={() => setActivePath('services')}>Digital Marketing</a></li>
                    <li><a href="/services/strategy" on:click={() => setActivePath('services')}>Strategy</a></li>
                    <li><a href="/services/marketing" on:click={() => setActivePath('services')}>Marketing</a></li>
                    <li><a href="/services/web-design" on:click={() => setActivePath('services')}>Web Design</a></li>
                    <li><a href="/services/ux-design" on:click={() => setActivePath('services')}>UX Design</a></li>
                    <li><a href="/services/enterprise-software" on:click={() => setActivePath('services')}>Enterprise Software</a></li>
                  </ul>
                </div>
              {/if}
            </li>
            <li class:active={activeItem === 'industries'}>
              <button class="navigation__sub-menu-btn {activeItem}" class:opened={isExpanded2} on:mouseenter={() => clickHandler(2)}>
                Industries
                <SmallArrow />
              </button>
              {#if isExpanded2} 
              <div class="sub-menu" transition:slide>
                <ul>
                  <li><a href="/industries/b2b" on:click={() => setActivePath('industries')}>B2B</a></li>
                  <li><a href="/industries/b2c" on:click={() => setActivePath('industries')}>B2C</a></li>
                  <li><a href="/industries/medical" on:click={() => setActivePath('industries')}>Medical</a></li>
                  <li><a href="/industries/medicare" on:click={() => setActivePath('industries')}>Medicare</a></li>
                </ul>
              </div>
              {/if}
            </li>
            <li class:active={activeItem === 'our-work'}>
              <a class={activeItem} href="/our-work" on:click={() => setActivePath('our-work')}>Our Work</a>
            </li>
            <li class:active={activeItem === 'about'}>
              <button class="navigation__sub-menu-btn {activeItem}" class:opened={isExpanded3} on:mouseenter={() => clickHandler(3)}>
                About
                <SmallArrow />
              </button>
              {#if isExpanded3} 
              <div class="sub-menu" transition:slide>
                <ul>
                  <li><a href="/about/about" on:click={() => setActivePath('about')}>About</a></li>
                  <li><a href="/about/team" on:click={() => setActivePath('about')}>Team</a></li>
                  <li><a href="/about/approach" on:click={() => setActivePath('about')}>Our Approach</a></li>
                </ul>
              </div>
              {/if}
            </li>
            <li class:active={activeItem === 'blog'}>
              <a class={activeItem} href="/blog/post" on:click={() => setActivePath('blog')}>Blog</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="header__col header__col--absolute">
        <div class="navigation">
          <ul class="navigation__list">
            <li class="desktop-visible"  class:active={activeItem === 'contact-us'}>
              <a class={activeItem} href="/contact-us" on:click={() => setActivePath('contact-us')}>Contact Us</a>
            </li>
            <li><a class="btn btn--primary" href="/book-a-call">Book a <span class="desktop-visible">Strategy</span> Call</a></li>
            <li>
              <button class="switch-theme" class:dark={activeSwitch} on:click="{() => switchColorScheme() }" aria-label='switch'></button>
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