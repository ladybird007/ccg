<script lang="ts">
	import type { LayoutData } from './$types';

  import Header from '$lib/components/Header/Header.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';

  import '../app.css';

  let { children } = $props();

</script>

<Header />

{@render children()}

<Footer />