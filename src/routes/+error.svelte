<script lang="ts">
	import { page } from '$app/stores';
</script>

<div>
	<h1 class="">{$page.status}: {$page?.error?.message}</h1>
	<a href="/">Go to homepage</a>
</div>
