<script lang="ts">
  import { config } from '$lib/config';
</script>

<section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-primary">
  <!-- Decorative circle rings (solid lines as in screenshot) -->
  <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div class="absolute top-1/2 right-[-15%] -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5"></div>
    <div class="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"></div>
    <div class="absolute top-1/2 right-[5%] -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 w-full">
    <!-- Eyebrow label -->
    <p class="text-accent text-sm font-semibold tracking-[0.25em] uppercase mb-6">
      Care That Endures.
    </p>

    <!-- Doctor Name -->
    <h1 class="text-6xl sm:text-7xl xl:text-8xl font-extralight text-white leading-tight mb-2"
        style="font-family: 'Georgia', 'Times New Roman', serif;">
      {config.doctor.name}
    </h1>

    <!-- Title in italic -->
    <p class="text-2xl sm:text-3xl text-white/80 italic font-light mb-8"
       style="font-family: 'Georgia', 'Times New Roman', serif;">
      {config.doctor.title}
    </p>

    <!-- Description -->
    <p class="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg mb-8">
      We provide compassionate, expert medical care for you and your family. Your health is our lifelong commitment.
    </p>

    <!-- CTA buttons (Solid & Outline) -->
    <div class="flex flex-col sm:flex-row gap-6">
      <!-- Book Appointment - solid gold -->
      <a href="#contact"
         class="btn-primary px-8 py-4 rounded-sm text-base">
        Book Appointment
      </a>

      <!-- Learn More - white outline -->
      <a href="#about"
         class="btn-outline px-8 py-4 rounded-sm text-base">
        Learn More
      </a>
    </div>


  </div>

  <!-- Decorative circles (extra small one on right bottom) -->
  <div class="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-accent/5 border border-accent/10"></div>
</section>

<style>
  /* Ensure clean serif look */
</style>
