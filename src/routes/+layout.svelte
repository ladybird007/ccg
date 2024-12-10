<script>
	let { children } = $props();
    
    import Header from '$lib/components/Header/Header.svelte';
    import Footer from '$lib/components/Footer/Footer.svelte';

    import '../app.css';
</script>

<Header />

{@render children()}

<Footer />