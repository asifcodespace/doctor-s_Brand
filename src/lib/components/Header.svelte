<script lang="ts">
  import { config } from '$lib/config';
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-20 items-center">
      
      <!-- Logo and Doctor Name -->
      <div class="flex items-center">
        <!-- Replace with actual logo image later -->
        <a href="/" class="flex items-center gap-3">
          <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl">
            A
          </div>
          <div>
            <h1 class="text-xl font-bold text-text-main leading-tight">{config.doctor.name}</h1>
            <p class="text-sm font-medium text-text-muted">{config.doctor.title}</p>
          </div>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a href="#about" class="text-text-main hover:text-primary transition-colors font-medium">About</a>
        <a href="#services" class="text-text-main hover:text-primary transition-colors font-medium">Services</a>
        <a href="#contact" class="text-text-main hover:text-primary transition-colors font-medium">Contact</a>
      </nav>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center">
        <a href="#contact" class="btn-primary">Book Appointment</a>
      </div>

      <!-- Mobile menu button -->
      <div class="flex items-center md:hidden">
        <button on:click={toggleMenu} class="text-text-main hover:text-primary focus:outline-none focus:text-primary" aria-label="Toggle menu">
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

  <!-- Mobile Navigation -->
  {#if isMenuOpen}
    <div class="md:hidden bg-white border-t border-gray-100 pb-4 px-4 shadow-lg absolute w-full">
      <div class="flex flex-col space-y-4 pt-4">
        <a href="#about" class="text-text-main font-medium hover:text-primary" on:click={toggleMenu}>About</a>
        <a href="#services" class="text-text-main font-medium hover:text-primary" on:click={toggleMenu}>Services</a>
        <a href="#contact" class="text-text-main font-medium hover:text-primary" on:click={toggleMenu}>Contact</a>
        <a href="#contact" class="btn-primary inline-block text-center mt-4" on:click={toggleMenu}>Book Appointment</a>
      </div>
    </div>
  {/if}
</header>
