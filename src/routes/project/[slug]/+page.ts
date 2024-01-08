import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { loadData } from "$lib/modules/sanity"
import type { Project } from '$lib/modules/types';

export const load = (async ({ params }) => {
	const post: Project = await loadData("*[slug.current == $slug][0]{..., 'playbackId': featuredVideo.asset->playbackId}", { slug: params.slug })
	if (post) return { post };
	throw error(404, 'Not found');
}) satisfies PageLoad;
