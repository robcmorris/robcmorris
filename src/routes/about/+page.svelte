<!-- src/routes/About/ -->

<svelte:head>
    <title>About Rob Morris</title>
</svelte:head>

<section class="bg-gray-900 text-white">
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl p-5"
      >About.
      </h1>
    </div>
  </div>
</section>



<!-- INTRO -->
<section class="text-gray-700 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="sm:text-4xl text-8xl font-extrabold py-12">Hello, I'm Rob!</h1>
      <p class="mb-8 leading-relaxed">I developed a love for technology at a young age, starting with handheld electronics and video games. Over the years, I’ve gained a lot of experience with computer hardware, software, and programming. I eventually ended up with working in the IT industry at a local managed IT service provider.</p>
      <p class="mb-8 leading-relaxed">When I’m not working, I’m an advocate for open-source software and enjoy self-hosting useful projects in my home lab. I like experimenting with Docker, Linux, and learning to program in various languages. I still play the occasional video games from time to time, but most of my free time is spent learning about new technologies and working towards new certifications.</p>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/300x400/eeeeee/888888">
    </div>
  </div>
</section>
  
<!-- CERTS -->
<section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="max-w-screen-sm sm:text-center sm:mx-auto">
      <h2 class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        My Certifications
      </h2>
      <hr class="w-full my-8 border-gray-300" />
      <p class="text-base text-gray-700 md:text-lg sm:px-4 pb-12">
        Some certs I've achived over the years.
      </p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-300 p-6 rounded-lg">
          <div class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-4">
            <img src="https://comptiawebsite.blob.core.windows.net/webcontent/images/default-source/siteicons/logoaplus.svg" alt="CompTIA A+ Certification Logo">
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">CompTIA A+</h2>
          <p class="leading-relaxed text-base">CompTIA A+ is an industry recognized credential with performance testing emphasizing the technologies and skills IT pros need to support a hybrid workforce.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-300 p-6 rounded-lg">
          <div class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-4">
            <img src="https://comptiawebsite.blob.core.windows.net/webcontent/images/default-source/siteicons/logonetworkplus.svg" alt="CompTIA Network+ Certification Logo">
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">CompTIA Network +</h2>
          <p class="leading-relaxed text-base">CompTIA Network+ validates the technical skills needed to securely establish, maintain and troubleshoot the essential networks that businesses rely on.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-300 p-6 rounded-lg">
          <div class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-4">
            <img src="https://comptiawebsite.blob.core.windows.net/webcontent/images/default-source/siteicons/logosecurityplus.svg" alt="CompTIA Security+ Certification Logo">
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">CompTIA Security+</h2>
          <p class="leading-relaxed text-base">CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions. </p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-300 p-6 rounded-lg">
          <div class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-4">
            <img src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" alt="Micosoft 365 Fundamentals Certification Logo">
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Microsoft 365 Fundamentals</h2>
          <p class="leading-relaxed text-base">Microsoft 365 Fundamentals provides knowledge on adopting cloud services, the basics of a Software as a Service (SaaS) cloud model, and the value of implementing Microsoft 365 cloud services.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-300 p-6 rounded-lg">
          <div class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-4">
            <img src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" alt="Micosoft 365 Fundamentals Certification Logo">
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Microsoft Azure Fundamentals</h2>
          <p class="leading-relaxed text-base">Microsoft Azure Fundamentals demonstrates a fundamental knowledge of cloud concepts, along with Azure services, workloads, security, privacy, pricing, and support.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-300 p-6 rounded-lg">
          <div class="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-4">
            <img src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png" alt="AWS Certified Cloud Practitioner Certification Logo">
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">AWS Cloud Certifited Practioner</h2>
          <p class="leading-relaxed text-base">Knowledge of core AWS services and use cases, billing and pricing models, security concepts, and how cloud impacts your business.</p>
        </div>
      </div>
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