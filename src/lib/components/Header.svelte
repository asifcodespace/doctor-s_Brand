<script lang="ts">
  import { config } from '$lib/config';
  let isMenuOpen = $state(false);
  let isDark = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function toggleDark() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
</script>

<header class="fixed top-0 left-0 right-0 z-100 h-[80px] flex items-center px-16 md:px-6 gap-8 transition-all duration-300" class:scrolled={false}>
  <!-- Logo -->
  <a href="/" class="font-display text-2xl text-cream tracking-wider mr-auto whitespace-nowrap opacity-90">
    {config.doctor.name}
  </a>

  <!-- Desktop Nav -->
  <nav class="hidden md:flex items-center gap-4">
    {#each [
      { label: 'SERVICES', href: '#services' },
      { label: 'ABOUT', href: '#about' },
      { label: 'REVIEWS', href: '#reviews' },
      { label: 'CONTACT', href: '#contact' }
    ] as item}
      <a href={item.href} class="text-mist text-[12px] tracking-widest font-medium transition-colors duration-200 hover:text-accent py-1">
        {item.label}
      </a>
    {/each}
    <a href="#contact" class="bg-accent text-white text-[12px] tracking-widest font-semibold px-4.5 py-2 rounded-sm transition-all duration-200 hover:brightness-110 hover:-translate-y-px">
      BOOK NOW
    </a>
  </nav>

  <!-- Theme Toggle -->
  <div class="flex items-center ml-4">
    <button
      onclick={toggleDark}
      aria-label="Toggle dark mode"
      class="bg-transparent border border-mist/30 rounded-full w-10 h-10 flex items-center justify-center text-mist text-sm cursor-pointer transition-all duration-200 hover:border-mist"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  </div>

  <!-- Mobile Toggle -->
  <button class="hidden flex-col gap-[5px] p-2 bg-none border-none cursor-pointer sm:flex" onclick={toggleMenu} aria-label="Toggle menu">
    <span class="block w-[22px] h-[2px] bg-mist rounded-[2px] transition-all duration-200" style={isMenuOpen ? 'transform: rotate(45deg) translate(5px,5px)' : ''}></span>
    <span class="block w-[22px] h-[2px] bg-mist rounded-[2px] transition-all duration-200" style={isMenuOpen ? 'opacity: 0' : ''}></span>
    <span class="block w-[22px] h-[2px] bg-mist rounded-[2px] transition-all duration-200" style={isMenuOpen ? 'transform: rotate(-45deg) translate(5px,-5px)' : ''}></span>
  </button>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="fixed top-[80px] left-0 right-0 bg-primary flex flex-col px-12 sm:px-6 py-8 border-t border-white/5 animate-slide-down shadow-xl">
      <a href="#services" class="text-mist no-underline text-sm py-3 border-b border-white/5 tracking-widest" onclick={toggleMenu}>SERVICES</a>
      <a href="#about" class="text-mist no-underline text-sm py-3 border-b border-white/5 tracking-widest" onclick={toggleMenu}>ABOUT</a>
      <a href="#reviews" class="text-mist no-underline text-sm py-3 border-b border-white/5 tracking-widest" onclick={toggleMenu}>REVIEWS</a>
      <a href="#contact" class="text-mist no-underline text-sm py-3 border-b border-white/5 tracking-widest" onclick={toggleMenu}>CONTACT</a>
      <a href="#contact" class="text-accent no-underline text-sm py-4 font-bold tracking-widest" onclick={toggleMenu}>BOOK APPOINTMENT →</a>
    </div>
  {/if}
</header>

<style>
  header.scrolled {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-slide-down {
    animation: slideDown 0.25s ease-out;
  }

  @media (max-width: 768px) {
    .hidden { display: none; }
    .md\:flex { display: flex; }
  }

  @media (max-width: 640px) {
    .sm\:flex { display: flex; }
  }
</style>
