import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const colorScheme = writable('light');
export const currentNavItem = writable('home');

let windowWidth = browser ? window.innerWidth : 1000;
export const slidesCount = writable(browser &&  3);

const setWindowWidth = () => {
  console.log(windowWidth);
  if (browser){    
    slidesCount.update(v => {
      let val = 3;  
      if (windowWidth < 768) {
        val = 1
      } else if (windowWidth > 1279) {
        val = 3
      } else {
        val = 2
      }   
      windowWidth = window.innerWidth
      return v = val; 
    });    
  }  
};

if (browser) {
  setWindowWidth();
  window.addEventListener('resize', setWindowWidth);
}