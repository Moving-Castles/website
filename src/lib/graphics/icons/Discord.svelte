<script lang="ts">
	export let spaced = false;
	import Fa from 'svelte-fa';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="icon" class:spaced>
	<Fa icon={faDiscord} />
</div>

<style lang="scss">
	.icon {
		margin-right: 1ch;

		&.spaced {
			margin-right: 2ch;
		}
	}
</style>
