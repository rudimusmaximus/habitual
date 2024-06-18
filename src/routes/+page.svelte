<script>
  // import Counter from './Counter.svelte';
  import welcome from '$lib/images/svelte-welcome.webp';
  import welcomeFallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
  <title>Demo</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcomeFallback} alt="Welcome" />
      </picture>
    </span>
  </h1>

  <div class="w-full" title="demo-video" data-demo-is-final="true">
    <iframe
      class="w-full aspect-video border-none"
      src="https://www.youtube-nocookie.com/embed/cbOQPH6PBDo?si=SGW83bm45DPcmShM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</section>

<style>
  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
