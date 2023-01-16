<!-- src/routes/About/ -->

<svelte:head>
    <title>About</title> 
</svelte:head>

<!-- INTRO -->
<section class="text-gray-700 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Me
        <br class="hidden lg:inline-block">Rob Morris
      </h1>
      <p class="mb-8 leading-relaxed">I developed a love for technology at a young age, starting with handheld electronics and video games. Over the years, I’ve gained a lot of experience with computer hardware, software, and programming. I eventually ended up with working in the IT industry at a local managed IT service provider.</p>
      <p class="mb-8 leading-relaxed">When I’m not working, I’m an advocate for open-source software and enjoy self-hosting useful projects in my home lab. I like experimenting with Docker, Linux, and learning to program in various languages. I still play the occasional video games from time to time, but most of my free time is spent learning about new technologies and working towards new certifications.</p>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded w-60 h-60" alt="hero" src="http://www.robcmorris.com/wp-content/uploads/2022/12/profile-pic.png">
    </div>
  </div>
</section>
  
<!-- CERTS -->
<section class="text-gray-700 body-font border-t border-gray-200">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">My Certifications</h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-base">Some Certifications I've earned.</p>
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
