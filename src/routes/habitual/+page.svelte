<script>
  import {goto} from '$app/navigation';

  /**
   *
   */
  function handleDefineClick() {
    goto('/habitual/define');
  }

  /**
   *
   */
  function handleHelpClick() {
    goto('/habitual/help');
  }

  /**
   *
   */
  function handleLogClick() {
    goto('/habitual/log');
  }

  /**
   *
   */
  function handleReviewClick() {
    goto('/habitual/review');
  }
</script>

<svelte:head>
  <title>Habitual</title>
  <meta name="description" content="The Practice Better Habits App" />
</svelte:head>

<h1 title="header" class="py-4 text-gray-600">Make good choices!</h1>

<div>
  <h2 class="text-sm font-medium text-gray-500">Available actions</h2>
  <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
    <li class="col-span-1 flex rounded-md shadow-sm">
      <div
        class="flex w-16 flex-shrink-0 items-center justify-center bg-pink-600 rounded-l-md
        text-sm font-medium text-white"
      >
        D
      </div>
      <div
        class="flex flex-1 items-center justify-between truncate rounded-r-md border-b
        border-r border-t border-gray-200 bg-white"
      >
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <a href="/habitual/define" class="font-medium text-gray-900 hover:text-gray-600">Define</a>
          <p class="text-gray-500">'you can do it'</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button
            type="button"
            onclick={handleDefineClick}
            class="inline-flex h-8 w-8 items-center justify-center rounded-full
            bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none
            focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0
                010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
    <li class="col-span-1 flex rounded-md shadow-sm">
      <div
        class="flex w-16 flex-shrink-0 items-center justify-center bg-purple-600
        rounded-l-md text-sm font-medium text-white"
      >
        L
      </div>
      <div
        class="flex flex-1 items-center justify-between truncate rounded-r-md border-b
        border-r border-t border-gray-200 bg-white"
      >
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <a href="/habitual/log" class="font-medium text-gray-900 hover:text-gray-600">Log</a>
          <p class="text-gray-500">'you did it'</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button
            type="button"
            onclick={handleLogClick}
            class="inline-flex h-8 w-8 items-center justify-center rounded-full
            bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none
            focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5
                0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
    <li class="col-span-1 flex rounded-md shadow-sm">
      <div
        class="flex w-16 flex-shrink-0 items-center justify-center bg-green-500
        rounded-l-md text-sm font-medium text-white"
      >
        R
      </div>
      <div
        class="flex flex-1 items-center justify-between truncate rounded-r-md border-b
        border-r border-t border-gray-200 bg-white"
      >
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <a href="/habitual/review" class="font-medium text-gray-900 hover:text-gray-600">Review</a>
          <p class="text-gray-500">'bask in your greatness'</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button
            type="button"
            onclick={handleReviewClick}
            class="inline-flex h-8 w-8 items-center justify-center rounded-full
            bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none
            focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5
                0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
    <li class="col-span-1 flex rounded-md shadow-sm">
      <div
        class="flex w-16 flex-shrink-0 items-center justify-center bg-yellow-500 rounded-l-md
        text-sm font-medium text-white"
      >
        ?
      </div>
      <div
        class="flex flex-1 items-center justify-between truncate rounded-r-md border-b
        border-r border-t border-gray-200 bg-white"
      >
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <a href="/habitual/help" class="font-medium text-gray-900 hover:text-gray-600">Help</a>
          <p class="text-gray-500">'learn about flexible habits'</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button
            type="button"
            onclick={handleHelpClick}
            class="inline-flex h-8 w-8 items-center justify-center rounded-full
            bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none
            focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:cursor-pointer"
          >
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0
                010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  </ul>
</div>

<style>
</style>
