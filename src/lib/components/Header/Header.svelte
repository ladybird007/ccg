<script lang="ts">
  import { page } from '$app/stores';
  import { colorScheme } from '$lib/store';
  import { slide } from 'svelte/transition';

  import Address from '../Address/Address.svelte';

  import './header.css';

  import Logo from '$lib/assets/images/Logo.svg';
  import SmallArrow from '$lib/assets/images/icons/SmallArrow.svelte';

  let menuMobileVisible = false;

  function switchColorScheme () {
    const htmlTag = document.getElementsByTagName('html');
    if ($colorScheme === 'light') {
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

  function handlerSubMenuOpen(key:number) {
    let windowWidth = window.innerWidth;

    switch (key) {
      case 1:
        isExpanded2 = false,
        isExpanded3 = false;
        isExpanded1 = (windowWidth > 991 ? true : !isExpanded1);
        break;
      case 2:
        isExpanded1 = false,
        isExpanded3 = false;
        isExpanded2 = (windowWidth > 991 ? true : !isExpanded2);
        break;
      case 3:
        isExpanded1 = false,
        isExpanded2 = false;
        isExpanded3 = (windowWidth > 991 ? true : !isExpanded3);
        break;
      default:
        isExpanded1 = false,
        isExpanded2 = false,
        isExpanded3 = false;
    }

  }

  function handlerSubMenuClose(e) {
    let windowWidth = window.innerWidth,
        localTag = e.target.localName;

    if ((localTag === 'a') || (windowWidth > 991)) {
      isExpanded1 = false,
      isExpanded2 = false,
      isExpanded3 = false;
      if(menuMobileVisible) {
        menuMobileVisible = false;
      }
    }
	}

  const darkHeaderPages = [
    'about/about',
    'about/team',
    'about/approach',
    'book-a-call',
    'case-study',
    'contact-us',
    'our-work'
  ]

  const lightGrayHeaderPages = [
    'services'
  ]

  const setActiveClass = (val: string) => $page.url.pathname.includes(val);

  const setDarkHeaderBg = (val: string[]) => {
    const currectPath = val.find(i => $page.url.pathname.includes(i));
    return Boolean(currectPath)
  }
</script>

<header class="header" class:colored={menuMobileVisible} class:dark={setDarkHeaderBg(darkHeaderPages)} class:light-grey={setDarkHeaderBg(lightGrayHeaderPages)}>
  <div class="container">
    <div class="row justify-space-between align-center">
      <div class="header__col">
        <a href="/" class="logo">
          <img src={Logo} alt="CCG" />
        </a>
        <div class="navigation navigation--dropdown">
          <ul class="navigation__list">
            <li class:active={setActiveClass('services')} on:mouseleave={handlerSubMenuClose}>
              <button class="navigation__sub-menu-btn tablet-hidden" class:opened={isExpanded1} on:mouseenter={() => handlerSubMenuOpen(1)} >
                Services
                <SmallArrow />
              </button>
              <button class="navigation__sub-menu-btn tablet-visible" class:opened={isExpanded1} on:click={() => handlerSubMenuOpen(1)}>
                Services
                <SmallArrow />
              </button>

              {#if isExpanded1}
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="sub-menu" transition:slide>
                  <ul>
                    <li><a href="/services/digital-marketing" on:click={handlerSubMenuClose}>Digital Marketing</a></li>
                    <li><a href="/services/strategy" on:click={handlerSubMenuClose}>Strategy</a></li>
                    <li><a href="/services/marketing" on:click={handlerSubMenuClose}>Marketing</a></li>
                    <li><a href="/services/web-design" on:click={handlerSubMenuClose}>Web Design</a></li>
                    <li><a href="/services/ux-design" on:click={handlerSubMenuClose}>UX Design</a></li>
                    <li><a href="/services/enterprise-software" on:click={handlerSubMenuClose}>Enterprise Software</a></li>
                  </ul>
                </div>
              {/if}
            </li>
            <li class:active={setActiveClass('industries')} on:mouseleave={handlerSubMenuClose}>
              <button class="navigation__sub-menu-btn tablet-hidden" class:opened={isExpanded2} on:mouseenter={() => handlerSubMenuOpen(2)}>
                Industries
                <SmallArrow />
              </button>
              <button class="navigation__sub-menu-btn tablet-visible" class:opened={isExpanded2} on:click={() => handlerSubMenuOpen(2)}>
                Industries
                <SmallArrow />
              </button>
              {#if isExpanded2}
              <div class="sub-menu" transition:slide>
                <ul>
                  <li><a href="/industries/b2b" on:click={handlerSubMenuClose}>B2B</a></li>
                  <li><a href="/industries/b2c" on:click={handlerSubMenuClose}>B2C</a></li>
                  <li><a href="/industries/medical" on:click={handlerSubMenuClose}>Medical</a></li>
                  <li><a href="/industries/medicare" on:click={handlerSubMenuClose}>Medicare</a></li>
                </ul>
              </div>
              {/if}
            </li>
            <li class:active={setActiveClass('our-work')}>
              <a href="/our-work" on:click={handlerSubMenuClose}>Our Work</a>
            </li>
            <li class:active={setActiveClass('about')} on:mouseleave={handlerSubMenuClose}>
              <button class="navigation__sub-menu-btn tablet-hidden" class:opened={isExpanded3} on:mouseenter={() => handlerSubMenuOpen(3)}>
                About
                <SmallArrow />
              </button>
              <button class="navigation__sub-menu-btn tablet-visible" class:opened={isExpanded3} on:click={() => handlerSubMenuOpen(3)}>
                About
                <SmallArrow />
              </button>
              {#if isExpanded3}
              <div class="sub-menu" transition:slide>
                <ul>
                  <li><a href="/about/about" on:click={handlerSubMenuClose}>About</a></li>
                  <li><a href="/about/team" on:click={handlerSubMenuClose}>Team</a></li>
                  <li><a href="/about/approach" on:click={handlerSubMenuClose}>Our Approach</a></li>
                </ul>
              </div>
              {/if}
            </li>
            <li class:active={setActiveClass('blog')}>
              <a href="/blog/post" on:click={handlerSubMenuClose}>Blog</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="header__col header__col--absolute">
        <div class="navigation">
          <ul class="navigation__list">
            <li class="desktop-visible" class:active={setActiveClass('contact-us')}>
              <a href="/contact-us" on:click={handlerSubMenuClose}>Contact Us</a>
            </li>
            <li class="navigation__btn-wrap"><a class="btn btn--primary" href="/book-a-call">Book a <span class="desktop-visible">Strategy</span> Call</a></li>
            <li>
              <button class="switch-theme {$colorScheme}" on:click="{() => switchColorScheme() }" aria-label='switch'></button>
            </li>
            <li class="header__mobile-btn">
              <button class="mobile-menu-btn" aria-label="button" on:click="{() => menuMobileVisible = !menuMobileVisible }"><em></em></button>
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