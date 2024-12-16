
	import { writable } from 'svelte/store';

	export const colorScheme = writable('light');

	// you can subscribe to a store to react to its changes
	colorScheme.subscribe(value => {
		   
	});
