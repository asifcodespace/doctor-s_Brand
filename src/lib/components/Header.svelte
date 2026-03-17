<script lang="ts">
  import { config } from "$lib/config";
  let isMenuOpen = $state(false);
  let isDark = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  function toggleDark() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 h-[72px] md:h-[80px] flex items-center px-3 sm:px-4 md:px-12 lg:px-16 gap-1.5 sm:gap-2 md:gap-8 transition-all duration-300 bg-primary"
>
  <!-- Logo -->
  <a
    href="/"
    class="font-display text-lg sm:text-2xl text-cream tracking-wider mr-auto truncate opacity-90 max-w-[140px] xs:max-w-none"
  >
    {config.doctor.name}
  </a>

  <!-- Desktop Nav -->
  <nav class="hidden md:flex items-center gap-4">
    {#each [{ label: "SERVICES", href: "#services" }, { label: "ABOUT", href: "#about" }, { label: "REVIEWS", href: "#reviews" }, { label: "CONTACT", href: "#contact" }] as item}
      <a
        href={item.href}
        class="text-mist text-[12px] tracking-widest font-medium transition-colors duration-200 hover:text-accent py-1"
      >
        {item.label}
      </a>
    {/each}
    <a
      href="#contact"
      class="bg-accent text-white text-[12px] tracking-widest font-semibold px-4.5 py-2 rounded-sm transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
    >
      BOOK NOW
    </a>
  </nav>

  <!-- Theme Toggle -->
  <div class="flex items-center">
    <button
      onclick={toggleDark}
      aria-label="Toggle dark mode"
      class="bg-transparent border border-mist/20 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-mist text-base cursor-pointer transition-all duration-200 hover:border-mist hover:bg-white/5 active:scale-95 shrink-0"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  </div>

  <!-- Persistent Mobile Button -->
  <a
    href="#contact"
    class="flex md:hidden bg-accent text-white text-[9px] sm:text-[10px] tracking-widest font-bold px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-sm active:scale-95 transition-transform shrink-0"
  >
    BOOK
  </a>

  <!-- Mobile Toggle -->
  <button
    class="flex md:hidden flex-col gap-[4px] sm:gap-[5px] p-2 sm:p-3 -mr-1 sm:-mr-2 bg-none border-none cursor-pointer shrink-0"
    onclick={toggleMenu}
    aria-label="Toggle menu"
  >
    <span
      class="block w-[18px] sm:w-[22px] h-[2px] bg-mist rounded-[2px] transition-all duration-200"
      style={isMenuOpen ? "transform: rotate(45deg) translate(5px,5px)" : ""}
    ></span>
    <span
      class="block w-[18px] sm:w-[22px] h-[2px] bg-mist rounded-[2px] transition-all duration-200"
      style={isMenuOpen ? "opacity: 0" : ""}
    ></span>
    <span
      class="block w-[18px] sm:w-[22px] h-[2px] bg-mist rounded-[2px] transition-all duration-200"
      style={isMenuOpen ? "transform: rotate(-45deg) translate(5px,-5px)" : ""}
    ></span>
  </button>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div
      class="fixed inset-0 top-[80px] z-50 bg-primary flex flex-col px-12 sm:px-6 py-8 border-t border-white/5 animate-slide-down shadow-xl overflow-y-auto"
    >
      <a
        href="#services"
        class="text-mist no-underline text-base py-4 border-b border-white/5 tracking-widest"
        onclick={toggleMenu}>SERVICES</a
      >
      <a
        href="#about"
        class="text-mist no-underline text-base py-4 border-b border-white/5 tracking-widest"
        onclick={toggleMenu}>ABOUT</a
      >
      <a
        href="#reviews"
        class="text-mist no-underline text-base py-4 border-b border-white/5 tracking-widest"
        onclick={toggleMenu}>REVIEWS</a
      >
      <a
        href="#contact"
        class="text-mist no-underline text-base py-4 border-b border-white/5 tracking-widest"
        onclick={toggleMenu}>CONTACT</a
      >
      <a
        href="#contact"
        class="text-accent no-underline text-base py-6 font-bold tracking-widest"
        onclick={toggleMenu}>BOOK APPOINTMENT →</a
      >
    </div>
  {/if}
</header>

<style>
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-down {
    animation: slideDown 0.25s ease-out;
  }
</style>
