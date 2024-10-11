<script lang="ts">
	import type { About } from "$lib/types";
    import Button from "$lib/components/elements/Button.svelte";

    export let about: About
</script>

<div id='menu' role='presentation' class='screen'>
    <div class="inner">
        <div class='tagline'>
            {about.tagline}
        </div>
        <div class='menu'>
            <Button text="Projects" url="#projects"/>
            <Button text="Writings" url="#writings"/>
            <Button text="Contact" url="#contact"/>
        </div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/responsive.scss';

	.screen {
		text-align: center;
		height: 100dvh;
		width: 100dvw;
		padding: 0;
		margin: 0;
		display: flex;
        justify-content: center;
        align-items: center;
		user-select: none;
		cursor: pointer;

        .inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            // font-size: 16px;
            // line-height: 18px;
            width: 50ch;
            max-width: 90dvw;

            .tagline {
                margin-bottom: 1em;
            }

            .menu {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 30ch;

                .item {
                    padding: 1em;
                    bordeR: 1px solid white;
                    margin-bottom: 1em;
                }
            }
        }
	}

</style>
