<script>
  // import {enhance} from '$app/forms';
</script>

<svelte:head>
  <title>Habitual</title>
  <meta name="description" content="The Practice Better Habits App" />
</svelte:head>

<h1 title="header">Make good choices!</h1>

<div class="actions-container">
  <a class="how-to" href="/habitual/how-to">How to define a flexible habit</a>
</div>

<style>
  .actions-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex: 1;
  }

  .how-to {
    color: var(--color-text);
  }

  .how-to::before {
    content: 'i';
    display: inline-block;
    font-size: 0.8em;
    font-weight: 900;
    width: 1em;
    height: 1em;
    padding: 0.2em;
    line-height: 1;
    border: 1.5px solid var(--color-text);
    border-radius: 50%;
    text-align: center;
    margin: 0 0.5em 0 0;
    position: relative;
    top: -0.05em;
  }
</style>
