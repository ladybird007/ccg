<script>
	import NavItem from '../Navigation/NavBarItem.svelte';
    import DropdownMenu from '../Navigation/DropdownMenu.svelte';

	import '../Navigation/navigation.css';
</script>

<!-- nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <span>
                Settings
            </span>
            <div class="dropdown stack">
                <ul>
                    <li><a href="/settings/profile">Profile</a></li>
                    <li><a href="/settings/notifications">Notifications</a></li>
                </ul>
            </div>
        </li>
    </ul>
</nav -->

<nav class="navbar" style={$$props.style}>
	<ul class="navbar-nav">
		<NavItem>
			<a href="/" slot="trigger">Home</a>
		</NavItem>
		
		<NavItem>
			<a href="/about" slot="trigger">About</a>
		</NavItem>
		
		<NavItem>
			<span slot="trigger">
				Settings
			</span>
			<DropdownMenu></DropdownMenu>
		</NavItem>
	</ul>
</nav>

<style>
	.navbar {
		height: var(--nav-size);
		background-color: var(--bg);
		padding: 0 1rem;
		border-bottom: var(--border);
	}
	
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.navbar-nav {
		max-width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-end;
	}
</style>
