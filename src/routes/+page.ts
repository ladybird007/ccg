import type { PageLoad } from './$types';

export const load: PageLoad = async ({ untrack, url }) => {
	// Untrack url.pathname so that path changes don't trigger a rerun
	if (untrack(() => url.pathname === '/')) {
		return { message: 'Welcome!' };
	}
};