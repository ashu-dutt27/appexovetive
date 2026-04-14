import React from "react";

const Techstack = () => {
  return (
   <section class="w-full relative py-12 px-4 sm:px-0">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="gradient-text text-xl sm:text-2xl md:text-4xl font-medium mb-4 leading-snug max-w-5xl mx-auto">
        A High-Performance Tech Stack Engineered for Your Vision
      </h2>
      <p class="max-w-4xl mx-auto font-normal text-muted-foreground text-sm sm:text-base text-center">
        We use these technologies to deliver secure and scalable blockchain solutions.
      </p>
    </div>

   <div class="sm:hidden max-w-7xl mx-auto space-y-4">
      <div class="rounded-xl bg-card text-card-foreground card-shadow">
        <button class="flex items-center justify-between p-4 w-full text-left cursor-pointer accordion-toggle">
          <span class="text-base font-medium">UI/UX Design</span>
          <svg class="transition-transform duration-300 rotate-180" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
        <div class="p-4 grid grid-cols-2 gap-4 accordion-content">
          <div class="bg-card text-card-foreground card-shadow h-16 rounded-lg flex items-center gap-3 px-4">
            <img src="https://img.nadcab.com/wp-content/uploads/2025/11/Figma.webp?w=64&q=75" alt="Figma" class="w-6 h-6 flex-shrink-0" />
            <span class="font-medium text-sm">Figma</span>
          </div>
          <div class="bg-card text-card-foreground card-shadow h-16 rounded-lg flex items-center gap-3 px-4">
            <img src="https://img.nadcab.com/wp-content/uploads/2025/11/adobe-xd.svg?w=64&q=75" alt="Adobe XD" class="w-6 h-6 flex-shrink-0" />
            <span class="font-medium text-sm">Adobe XD</span>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:flex bg-card text-card-foreground card-shadow rounded-2xl lg:container mx-auto overflow-hidden">
      <div class="flex w-full min-h-[400px]">
        <div class="w-1/2 bg-blue-500 text-white border-r border-gray-200 dark:border-gray-700 overflow-y-auto max-h-[400px] custom-scrollbar p-6 space-y-4">
          <div class="clickable-row hover:bg-blue-400 p-3 rounded-lg cursor-pointer flex justify-between items-center">
            <h3 class="font-normal text-lg">UI/UX Design</h3>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
            </svg>
          </div>
          <div class="clickable-row hover:bg-blue-400 p-3 rounded-lg cursor-pointer flex justify-between items-center">
            <h3 class="font-normal text-lg">Front-End</h3>
          </div>
          <div class="clickable-row hover:bg-blue-400 p-3 rounded-lg cursor-pointer flex justify-between items-center">
            <h3 class="font-normal text-lg">Backend</h3>
          </div>
        </div>

        <div class="w-1/2 p-6 overflow-y-auto max-h-[400px] custom-scrollbar dark:bg-white">
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-card text-card-foreground card-shadow h-16 rounded-lg flex items-center gap-3 px-4">
              <img src="https://img.nadcab.com/wp-content/uploads/2025/11/Figma.webp?w=64&q=75" alt="Figma" class="w-6 h-6 flex-shrink-0" />
              <span class="font-medium text-sm">Figma</span>
            </div>
            <div class="bg-card text-card-foreground card-shadow h-16 rounded-lg flex items-center gap-3 px-4">
              <img src="https://img.nadcab.com/wp-content/uploads/2025/11/adobe-xd.svg?w=64&q=75" alt="Adobe XD" class="w-6 h-6 flex-shrink-0" />
              <span class="font-medium text-sm">Adobe XD</span>
            </div>
    </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Techstack;
