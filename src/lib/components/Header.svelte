<script lang="ts">
  import { config } from '$lib/config';
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-20 items-center">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-3 group">
        <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-2xl text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
          A
        </div>
        <div>
          <h1 class="text-xl font-bold text-text-main leading-tight group-hover:text-primary transition-colors duration-300">{config.doctor.name}</h1>
          <p class="text-sm font-medium text-text-muted">{config.doctor.title}</p>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-8">
        {#each ['About', 'Services', 'Contact'] as item}
          <a
            href="#{item.toLowerCase()}"
            class="relative text-text-main font-medium hover:text-primary transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
          >
            {item}
          </a>
        {/each}
      </nav>

      <!-- CTA -->
      <div class="hidden md:flex">
        <a href="#contact" class="btn-primary shadow-lg shadow-primary/30 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200">
          Book Appointment
        </a>
      </div>

      <!-- Mobile button -->
      <div class="flex items-center md:hidden">
        <button on:click={toggleMenu} class="text-text-main hover:text-primary focus:outline-none transition-colors" aria-label="Toggle menu">
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
    <div class="md:hidden absolute w-full backdrop-blur-xl bg-white/80 border-b border-white/30 shadow-lg pb-4 px-4">
      <div class="flex flex-col space-y-4 pt-4">
        {#each ['About', 'Services', 'Contact'] as item}
          <a href="#{item.toLowerCase()}" class="text-text-main font-medium hover:text-primary transition-colors" on:click={toggleMenu}>{item}</a>
        {/each}
        <a href="#contact" class="btn-primary text-center mt-4" on:click={toggleMenu}>Book Appointment</a>
      </div>
    </div>
  {/if}
</header>
