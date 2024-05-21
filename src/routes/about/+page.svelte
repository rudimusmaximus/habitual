<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class="title">About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>

<style lang="postcss">
	/* This is how you can use the postcss preprocessor for tailwind */

	.title {
		@apply text-blue-600;
	}

	/* Change text color to red on hover */
	.title:hover {
		@apply text-red-600;
	}

	/* Apply different text sizes based on screen size */
	.title {
		@apply text-lg md:text-xl lg:text-2xl;
	}
</style>
