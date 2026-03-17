<script lang="ts">
  import { config } from '$lib/config';
</script>

<section id="hero" class="min-h-screen bg-primary flex items-center px-16 sm:px-6 py-24 relative overflow-hidden">
  <!-- Decorative Rings -->
  <div class="absolute -right-[300px] lg:-right-[400px] -top-[150px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-mist/5 pointer-events-none animate-ring-pulse"></div>
  <div class="absolute -right-[150px] lg:-right-[250px] top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full border border-mist/10 pointer-events-none"></div>

  <div class="relative z-10 max-w-[800px]">
    <div class="text-[12px] tracking-[0.2em] uppercase text-accent font-semibold mb-10 animate-fade-up" style="animation-delay: 0.2s;">
      Care that endures.
    </div>
    
    <h1 class="font-display text-[clamp(48px,7vw,86px)] font-light text-cream leading-[1.05] mb-2 animate-fade-up" style="animation-delay: 0.35s;">
      {config.doctor.name}
    </h1>

    <div class="font-display text-[clamp(20px,3vw,26px)] italic text-mist mb-8 animate-fade-up" style="animation-delay: 0.5s;">
      {config.doctor.title}
    </div>

    <p class="text-[15px] text-mist/80 leading-[1.8] max-w-[480px] mb-12 animate-fade-up" style="animation-delay: 0.65s;">
      We provide compassionate, expert medical care for you and your family. Your health is our lifelong commitment.
    </p>

    <div class="flex gap-4 flex-wrap animate-fade-up" style="animation-delay: 0.8s;">
      <a href="#contact" class="btn btn-gold px-8 py-3.5 rounded-sm">Book Appointment</a>
      <a href="#about" class="btn btn-outline px-8 py-3.5 rounded-sm hover:border-mist">Learn More</a>
    </div>
  </div>
</section>

<style>
  .animate-ring-pulse {
    animation: ringPulse 4s ease-in-out infinite;
  }
</style>
