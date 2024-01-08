import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { loadData } from "$lib/modules/sanity"
import type { About } from '$lib/modules/types';

export const load = (async ({ params }) => {
    const about: About = await loadData("*[slug.current == 'about'][0]", {})
    if (about) return { about };
    throw error(404, 'Not found');
}) satisfies PageLoad;
