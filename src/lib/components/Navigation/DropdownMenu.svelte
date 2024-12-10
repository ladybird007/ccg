<script>
	import { fly } from 'svelte/transition';
	
	import MenuItem from './MenuItem.svelte';
	
	let activeMenu = 'settings';
	let menuHeight = 0;
	let menuEl = null;
	
	$: menuHeight = menuEl?.offsetHeight ?? 0;
</script>

<div class="dropdown stack" style="height: {menuHeight}px">	
	{#if activeMenu === 'settings'}
		<div class="menu" in:fly={{ x: 300 }} out:fly={{ x: 300 }} bind:this={menuEl}>			
			<MenuItem>Setting 1</MenuItem>
            <MenuItem>Setting 2</MenuItem>
            <MenuItem>Setting 3</MenuItem>
		</div>
	{/if}
	
</div>

<style>
	.dropdown {
		position: absolute;
		top: 58px;
		width: 300px;
		transform: translateX(-45%);
		background-color: var(--bg);
		border: var(--border);
		border-radius: var(--border-radius);
		padding: 1rem;
		overflow: hidden;
		transition: height var(--speed) ease;
	}
	
	.stack {
		display: grid;
		align-items: start; /* allow to shrink */
	}
	
	.stack > :global(*) {
		grid-area: 1 / 1;
  }
	
	.menu {
		width: 100%;
	}
</style>