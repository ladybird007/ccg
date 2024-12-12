
	import { writable } from 'svelte/store';

	export const counter = writable('ROM')

	// you can subscribe to a store to react to its changes
	counter.subscribe(value => {
		console.log(`The counter value is ${value}`);    
	})
	
	// // updating the store’s value is just as easy:
	// counter.set(10)
	// counter.update(n => n + 1)
