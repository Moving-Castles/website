import type { Project } from '$lib/types';
import { loadData } from "$lib/modules/sanity/"
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const post: Project = await loadData("*[slug.current == $slug][0]{..., 'playbackId': featuredVideo.asset->playbackId, 'media': media[]{..., 'playbackId': asset->playbackId}}", { slug: params.slug })
	if (post) return { post };
	throw error(404, 'Not found');
}) satisfies PageLoad;
