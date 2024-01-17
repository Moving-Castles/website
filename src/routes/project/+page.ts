import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit'

export const load = (async ({ params }) => {
    throw redirect(301, "/#projects")
}) satisfies PageLoad;
