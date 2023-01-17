<!-- src/routes/Home/ -->

<svelte:head>
	<title>Home of Rob Morris</title>
</svelte:head>

<!-- HERO -->
<div class="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
	style="background-image:url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);">
	<div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-90" />

	<main class="px-4 sm:px-6 lg:px-8 z-10">
		<div class="text-center">
			<h2
				class="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl"
			>
				<span class="text-6xl font-extrabold box-decoration-slice bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 text-white px-2">Hello, World!</span>
			</h2>
			<p class="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
				I'm Rob! An IT Guy turned Software Engineer.
			</p>
			<div class="mt-5 sm:mt-8 sm:flex justify-center">
				<div class="rounded-md shadow">
					<a
						href="/projects"
						class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
					>
						Projects
					</a>
				</div>
				<div class="mt-3 sm:mt-0 sm:ml-3">
					<a
						href="/contact"
						class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10"
					>
						Contact Me
					</a>
				</div>
			</div>
		</div>
	</main>
</div>

<!-- CERTS BRIEF-->
<section class="text-gray-700 body-font border-t border-gray-200 text-center">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Vendor Certifications</h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-base">Companies I've earned Certifications with.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-300 p-6 rounded-lg">
          <div class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <img src="https://comptiacdn.azureedge.net/webcontent/images/default-source/mainsitetemplateimages/comptia_logo_white.png?" alt="CompTIA Logo">
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">CompTIA</h2>
          <p class="leading-relaxed text-base">The Computing Technology Industry Association is an American non-profit trade association that issues professional certifications for the information technology industry.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-300 p-6 rounded-lg">
          <div class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png?20210729021049" alt="Microsoft Logo">
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Microsoft</h2>
          <p class="leading-relaxed text-base">Microsoft Corporation is an American multinational technology corporation producing computer software, consumer electronics, personal computers, and related services.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-300 p-6 rounded-lg">
          <div class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <img src="https://www.svgrepo.com/show/331300/aws.svg" alt="AWS Logo">
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">AWS</h2>
          <p class="leading-relaxed text-base">Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.</p>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-8 sm:flex justify-center">
      <div class="rounded-md shadow">
        <a
          href="/about"
          class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

<!-- QUOTE -->
<section class="text-gray-700 body-font border-t border-gray-200">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam quas, dolorem deserunt modi inventore unde reprehenderit exercitationem eius vel suscipit maiores sunt quae eaque ullam. Cupiditate voluptate aspernatur voluptates!</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">John Doe</h2>
      <p class="text-gray-500">IT Manager</p>
    </div>
  </div>
</section>

<!-- MAP -->
<section class="text-gray-700 body-font relative">
  <div class="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=jacksonville%20%FL&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact Me</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Feel free to reach out to me about projects.</p>
      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email">
      <textarea class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p class="text-xs text-gray-500 mt-3">Your information will not be shared, sold, or used for spam.</p>
    </div>
  </div>
</section>