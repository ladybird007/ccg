
import { writable } from 'svelte/store';

export const colorScheme = writable('light');
export const currentNavItem = writable('home');

export let windowWidth = window.innerWidth;

const setWindowWidth = () => {
  windowWidth = window.innerWidth;
};
window.addEventListener('resize', setWindowWidth);

// you can subscribe to a store to react to its changes
colorScheme.subscribe(value => {
      
});