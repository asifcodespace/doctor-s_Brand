<script lang="ts">
  import { config } from '$lib/config';
</script>

<section id="hero" class="relative bg-bg-base overflow-hidden py-16 sm:py-24 lg:py-32">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
      
      <!-- Text Content -->
      <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left z-10">
        <h1 class="text-4xl tracking-tight font-extrabold text-text-main sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline">Your Health Is Our</span>
          <span class="block text-primary">Top Priority</span>
        </h1>
        <p class="mt-3 text-base text-text-muted sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Welcome to the practice of <span class="font-semibold text-primary">{config.doctor.name}</span>, a dedicated {config.doctor.title} ({config.doctor.qualifications}) committed to providing compassionate, personalized care for you and your family.
        </p>
        <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
          <a href="#contact" class="btn-primary w-full sm:w-auto text-center">
            Book an Appointment
          </a>
          <a href="#services" class="btn-outline w-full sm:w-auto text-center">
            View Services
          </a>
        </div>
      </div>

      <!-- Image Area -->
      <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
        <!-- Decorative background blob -->
        <div class="absolute w-full h-full bg-secondary/30 rounded-full blur-3xl -z-10 transform translate-x-10 translate-y-10"></div>
        
        <div class="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden aspect-[4/5] bg-gray-100 group">
             <!-- Placeholder for doctor image -->
            <div class="absolute inset-0 bg-primary/10 flex flex-col items-center justify-center text-primary">
                <svg class="h-24 w-24 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p class="font-medium text-lg">Doctor Profile Image</p>
                <p class="text-sm opacity-75">({config.doctor.name})</p>
            </div>
            
             <!-- To be uncommented when image exists -->
             <!-- <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={config.doctor.image} alt={config.doctor.name} /> -->
        </div>

        <!-- Floating Badge -->
        <div class="absolute bottom-10 -left-6 sm:-left-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 animate-bounce-slow">
            <div class="bg-secondary p-3 rounded-full text-primary">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <div>
                <p class="text-xs font-bold text-text-muted uppercase tracking-wider">Certified</p>
                <p class="font-bold text-text-main text-sm">{config.doctor.qualifications}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
    @keyframes bounce-slow {
        0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
    }
    .animate-bounce-slow {
        animation: bounce-slow 3s infinite;
    }
</style>
