import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPost } from '$lib/sanity';

export const load = (async ({ params }) => {
	const post = await getPost(params.slug);

  // console.log('post', post)
	if (post) return post;

	throw error(404, 'Not found');
}) satisfies PageLoad;
