<script lang="ts">
    import { config } from '$lib/config';
</script>

<section id="about" class="py-28 relative overflow-hidden">
  <div class="absolute inset-0 -z-10 bg-bg-base"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

      <!-- Glass info card -->
      <div class="relative mb-12 lg:mb-0">
        <div class="glass-card p-8 sm:p-12 relative overflow-hidden group">
          <!-- Decorative corner blob -->
          <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500 blur-2xl"></div>

          <h3 class="text-3xl font-extrabold text-primary mb-8 pb-4 border-b border-primary/10">
            {config.doctor.name}
          </h3>

          <div class="space-y-6">
            {#each [{ icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', label: 'Experience', value: '15+ Years' }, { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Qualifications', value: config.doctor.qualifications }, { icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Specialty', value: config.doctor.title }] as item}
              <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-200 group/item cursor-default">
                <div class="flex-shrink-0 bg-primary/10 rounded-full p-2.5 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon}/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-semibold text-text-muted uppercase tracking-wider">{item.label}</p>
                  <p class="font-semibold text-text-main mt-0.5">{item.value}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Bio text -->
      <div>
        <span class="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
          About The Doctor
        </span>
        <h2 class="text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl mb-6 leading-tight">
          A Commitment to <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Your Well-being</span>
        </h2>
        <div class="text-text-muted space-y-4 leading-relaxed">
          <p>{config.doctor.bio}</p>
          <p>Our practice is built on the foundation of trust, empathy, and evidence-based medicine. We strive to create a comfortable and welcoming environment where every patient feels heard and valued.</p>
        </div>

        <div class="mt-10">
          <a href="#contact" class="btn-primary shadow-lg shadow-primary/30 inline-flex items-center gap-2 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200">
            Contact Clinic
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
