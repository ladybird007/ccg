import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const colorScheme = writable('light');
export const currentNavItem = writable('home');
export const slidesCount = writable(browser && window.innerWidth < 768 ? 1 : (browser && window.innerWidth > 1279 ? 3 : 2));
export const popopVisible = writable(false);
