<script lang="ts">
	import { page } from '$app/stores'

	let language = "en-gb"
	let url = $page.url.href

	let title = "MOVING CASTLES"

	let description = ""

	let imageUrl = ""
	let imageWidth = 0
	let imageHeight = 0
	let imageAlt = ""
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="siteUrl" content={url} />
	<meta name="pageTitle" content={title} />
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>

	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content={title}>
	<meta name="twitter:description" content={description}>
	<meta name="twitter:image" content={imageUrl}>

	<meta property="og:site_name" content={title} />
	<meta property="og:locale" content={language} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content={imageWidth} />
	<meta property="og:image:height" content={imageHeight} />
	<meta property="og:image:alt" content={imageAlt} />
</svelte:head>