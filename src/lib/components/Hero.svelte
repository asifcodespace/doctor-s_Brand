<script lang="ts">
  import { config } from '$lib/config';
</script>

<section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-bg-base">
  <!-- Animated gradient background blobs -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[120px] animate-blob"></div>
    <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-secondary/40 blur-[100px] animate-blob animation-delay-2000"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[80px] animate-blob animation-delay-4000"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8 items-center">

      <!-- Text Content -->
      <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 backdrop-blur-sm">
          <span class="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Accepting New Patients
        </div>

        <h1 class="text-4xl tracking-tight font-extrabold text-text-main sm:text-5xl xl:text-6xl leading-tight">
          Your Health is in <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Expert Hands</span>
        </h1>

        <p class="mt-6 text-lg text-text-muted leading-relaxed">
          Welcome to the practice of <span class="font-semibold text-primary">{config.doctor.name}</span>,
          a dedicated {config.doctor.title} ({config.doctor.qualifications}) committed to compassionate, personalized care for you and your family.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
          <a href="#contact" class="btn-primary shadow-lg shadow-primary/30 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            Book Appointment
          </a>
          <a href="#services" class="btn-outline hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            View Services
          </a>
        </div>

        <!-- Stats row -->
        <div class="mt-12 grid grid-cols-3 gap-4">
          {#each [{ value: '15+', label: 'Years Experience' }, { value: '5K+', label: 'Happy Patients' }, { value: '4.9★', label: 'Average Rating' }] as stat}
            <div class="glass-card px-4 py-4 text-center">
              <p class="text-2xl font-extrabold text-primary">{stat.value}</p>
              <p class="text-xs text-text-muted mt-1 leading-tight">{stat.label}</p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Image area -->
      <div class="mt-16 lg:mt-0 lg:col-span-6 flex justify-center lg:justify-end">
        <div class="relative">
          <!-- Main card -->
          <div class="relative w-80 h-[440px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary border border-white/30 group">
            <!-- Inner placeholder -->
            <div class="absolute inset-0 flex flex-col items-center justify-center text-primary">
              <svg class="w-28 h-28 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <p class="text-sm opacity-50 mt-4 font-medium">{config.doctor.name}</p>
            </div>
            <!-- Bottom glass overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-md bg-white/30 border-t border-white/30">
              <p class="font-bold text-text-main">{config.doctor.name}</p>
              <p class="text-sm text-text-muted">{config.doctor.qualifications}</p>
            </div>
          </div>

          <!-- Floating glass badge -->
          <div class="absolute -bottom-6 -left-8 glass-card p-4 flex items-center gap-3 animate-float">
            <div class="bg-primary/15 p-2.5 rounded-full text-primary">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <p class="text-xs text-text-muted font-semibold uppercase tracking-wide">Certified</p>
              <p class="font-bold text-text-main text-sm">{config.doctor.qualifications}</p>
            </div>
          </div>

          <!-- Top right glass badge -->
          <div class="absolute -top-4 -right-8 glass-card px-4 py-3 flex items-center gap-2 animate-float animation-delay-2000">
            <span class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
            <p class="text-sm font-semibold text-text-main">Available Today</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  .animate-blob { animation: blob 8s infinite ease-in-out; }
  .animate-float { animation: float 3s infinite ease-in-out; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
</style>
