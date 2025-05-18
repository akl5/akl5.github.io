
<script lang="ts">    
    // import stylesheet: 
    import '../app.scss';

    let darkMode = $state(false);

    // icons for day/night mode toggle:
    import { Icon } from 'svelte-icons-pack';
    import { BsMoon,BsMoonStarsFill } from "svelte-icons-pack/bs";    
    

    let {children} = $props();

    // toggling light/dark-mode 
    function toggleTheme() { 
        darkMode = !darkMode;
    }

</script> 

<div class="menu-bar"> 
    <div class="menu-selections"> 
        <nav> 
            <a href="/">home</a> 
            <a href="/">about</a> 
            <a href="/projects">projects</a> 
            <a href="/">contact</a> 
        </nav> 
    </div>
    <button class="toggle-theme-button" onclick={toggleTheme}>
        {#if darkMode} 
            <Icon src={BsMoonStarsFill}/>
        {:else}
            <Icon src={BsMoon}/>
        {/if}
    </button>
</div>

{@render children()}