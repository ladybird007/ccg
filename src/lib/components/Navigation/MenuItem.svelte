<script>
	
</script>

<div class="menu-item">
	<slot />
</div>

<style>
	.menu-item {
		height: 50px;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 8px;
		align-items: center;
		border-radius: var(--border-radius);
		transition: background var(--speed);
		padding: 0.5rem;
		color: var(--text-color);
	}
	
	.menu-item:hover {
		background-color: #525357;
	}
</style>