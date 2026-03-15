<script lang="ts">
  import { config } from '$lib/config';
  const icons: Record<string, string> = {
    stethoscope: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    'shield-check': 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    heartbeat: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    'clipboard-list': 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  };
</script>

<section id="services" class="py-28 relative overflow-hidden">
  <!-- Subtle bg pattern -->
  <div class="absolute inset-0 -z-10 bg-gradient-to-b from-white via-secondary/10 to-white"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
        Services
      </span>
      <h2 class="text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl">
        Comprehensive Healthcare Services
      </h2>
      <p class="mt-4 text-lg text-text-muted">
        Personalised medical care tailored to every unique need.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each config.services as service, i}
        <div class="glass-card group p-8 cursor-default hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
          <!-- Icon wrapper with glass circle -->
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={icons[service.icon] ?? icons['clipboard-list']}/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-text-main mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
          <p class="text-text-muted text-sm leading-relaxed">{service.description}</p>

          <!-- Hover arrow -->
          <div class="mt-6 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
            Learn more
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
