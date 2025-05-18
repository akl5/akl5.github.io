<script> 
    let elapsed = $state(0);
    let interval = $state(1000);

    $effect(() => {
        setInterval(() => {
            elapsed+=1;
        }, interval);
    });
</script>

<svelte:head> 
    <title>alice lee.</title> 
</svelte:head> 

<h1>alice lee</h1>
<h3>Boston, MA </h3>
<p> time elapsed on page: {elapsed}s </p> 