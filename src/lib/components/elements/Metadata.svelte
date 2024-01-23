<script lang="ts">
	import type { Post, Project } from '$lib/modules/types';
	import { truncate } from 'lodash-es';
	import { toPlainText, urlFor } from '$lib/modules/sanity';
	export let post: Post | Project = {} as Post | Project;

	const BASE_TITLE = 'Moving Castles';
	const DEFAULT_DESCRIPTION =
		'Moving Castles is a game studio for the tactical research and development of autonomous worlds.';
	const DEFAULT_IMAGE = 'https://movingcastles.world/images/logo.png';
	const BASE_URL = 'https://movingcastles.world';

	/**
	 * Returns the formatted title based on the current language.
	 *
	 * @param {Post | Project} p - The object containing title details.
	 * @returns {string} - The formatted title.
	 */
	const getTitle = (p: Post | Project): string => {
		return (p.title ? p.title + ' | ' : '') + BASE_TITLE;
	};

	/**
	 * Retrieves and formats the description based on the current language, truncating it to 240 characters.
	 *
	 * @param {Post | Project} p - The object containing description details.
	 * @returns {string} - The truncated description.
	 */
	const getDescription = (p: Post | Project): string => {
		let d = p.content?.content ? toPlainText(p.content.content) : DEFAULT_DESCRIPTION;

		return truncate(d, {
			length: 240,
			separator: /.? +/
		});
	};

	/**
	 * Constructs a URL based on the given post type and slug.
	 *
	 * @param {Post | Project} p - The object containing URL details.
	 * @returns {string} - The constructed URL.
	 */
	const getUrl = (p: Post | Project): string => {
		const getPath = (p: Post | Project) => {
			if (p._type === 'post') return '/post/';
			if (p._type === 'project') return '/project/';
			return '/';
		};
		return BASE_URL + getPath(p) + (p.slug?.current ?? '');
	};

	/**
	 * Retrieves the image URL if available, or returns a default image URL.
	 *
	 * @param {Post | Project} p - The object containing image details.
	 * @returns {string} - The image URL or default image URL.
	 */
	const getImage = (p: Post | Project): string => {
		if (p.featuredImage) return urlFor(p.featuredImage).width(800).url();
		return DEFAULT_IMAGE;
	};

	let title = getTitle(post);
	let description = getDescription(post);
	let url = getUrl(post);
	let image = getImage(post);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="article" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={title} />
	<meta property="og:title" content={title} />
	<meta property="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="image" content={image} />
	<meta property="og:image" content={image} />
	<meta property="twitter:image" content={image} />
	<meta property="og:site_name" content={BASE_TITLE} />
</svelte:head>
