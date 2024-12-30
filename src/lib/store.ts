import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const prefersDarkColorScheme = () =>
    window &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

export const colorScheme = writable(browser && prefersDarkColorScheme() ? 'dark' : 'light');
export const slidesCount = writable(browser && window.innerWidth < 768 ? 1 : (browser && window.innerWidth > 1279 ? 3 : 2));
export const popopVisible = writable(false);

export const windowScroll = writable(0);
