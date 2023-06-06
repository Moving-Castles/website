import { getPosts } from '$lib/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const posts = await getPosts();

	if (posts) {
		return {
			posts,
      key: url.pathname
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;

