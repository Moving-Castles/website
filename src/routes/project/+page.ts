import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { loadData } from "$lib/modules/sanity"
import type { Post } from '$lib/modules/types';

export const load = (async ({ params }) => {
    const posts: Post[] = await loadData("*[_type == 'project']{..., 'playbackId': featuredVideo.asset->playbackId}", {})
    if (posts) return { posts };
    throw error(404, 'Not found');
}) satisfies PageLoad;
