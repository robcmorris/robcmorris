<!-- src/routes/Home/ -->

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center" style="background-image:url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);">
  <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>
  
  <main class="px-4 sm:px-6 lg:px-8 z-10">
        <div class="text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
            <span class="text-indigo-600 font-bold">Hello, World!</span> I'm Rob!
          </h2>
          <p class="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
            An IT Guy learning Software Development.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex justify-center">
            <div class="rounded-md shadow">
              <a href="/projects" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10">
                Projects
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="/contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </main>
  
</div>
