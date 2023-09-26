import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { loadData } from "$lib/modules/sanity"

export const load = (async ({ params }) => {
    const posts = await loadData("*[_type == 'writing']", {})
    if (posts) return { posts };
    throw error(404, 'Not found');
}) satisfies PageLoad;