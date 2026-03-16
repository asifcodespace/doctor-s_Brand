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

<header class="sticky top-0 z-50 bg-primary border-b border-white/5 transition-colors duration-400">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-20 items-center">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-3 group">
        <img
          src="/images/logo-symbol.png"
          alt="Dr. Avena symbol"
          class="w-11 h-11 object-contain transition-transform duration-300 drop-shadow-sm"
        />
        <div class="flex flex-col">
          <span class="text-2xl font-light text-white tracking-tight leading-none group-hover:text-accent transition-colors duration-300" style="font-family: 'Georgia', serif;">
            Dr. Avena
          </span>
          <span class="text-[9px] text-white/40 uppercase tracking-[0.3em] font-light mt-1.5">
            General Practitioner
          </span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-6">
        {#each [
          { label: 'Services', href: '#services' },
          { label: 'About', href: '#about' },
          { label: 'Reviews', href: '#reviews' },
          { label: 'Contact', href: '#contact' }
        ] as item}
          <a href={item.href} class="nav-link">{item.label}</a>
        {/each}
      </nav>

      <!-- Right controls -->
      <div class="hidden md:flex items-center gap-6">
        <!-- Book Now button (solid gold) -->
        <a href="#contact" class="btn-primary rounded-sm px-6 py-2">
          BOOK NOW
        </a>

        <!-- Moon / Sun toggle (simple) -->
        <button
          onclick={toggleDark}
          aria-label="Toggle dark mode"
          class="text-accent transition-colors duration-300"
        >
          {#if isDark}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          {/if}
        </button>
      </div>

      <!-- Mobile button -->
      <div class="flex items-center gap-4 md:hidden">
        <button onclick={toggleDark} class="text-white">
          {#if isDark}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          {/if}
        </button>
        <button onclick={toggleMenu} class="text-white" aria-label="Toggle menu">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            {#if isMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="md:hidden absolute w-full bg-primary border-b border-white/10 shadow-lg pb-6 px-4">
      <div class="flex flex-col space-y-4 pt-4">
        {#each [
          { label: 'Services', href: '#services' },
          { label: 'About', href: '#about' },
          { label: 'Reviews', href: '#reviews' },
          { label: 'Contact', href: '#contact' }
        ] as item}
          <a href={item.href} class="text-white/80 font-medium hover:text-white transition-colors" onclick={toggleMenu}>{item.label}</a>
        {/each}
        <a href="#contact" class="btn-primary text-center mt-4" onclick={toggleMenu}>BOOK NOW</a>
      </div>
    </div>
  {/if}
</header>
