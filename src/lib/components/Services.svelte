<script lang="ts">
  import { config } from '$lib/config';
  const icons: Record<string, string> = {
    stethoscope: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    'shield-check': 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    pill: 'M18.364 5.636a9 9 0 00-12.728 0l-12.728 12.728a9 9 0 0012.728 12.728l12.728-12.728a9 9 0 000-12.728z', // Simplified pill
    'clipboard-list': 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  };

  // Maps config icons to our internal paths/names
  const iconMap: Record<string, string> = {
    'stethoscope': 'stethoscope',
    'shield-check': 'shield-check',
    'heartbeat': 'pill',
    'clipboard-list': 'clipboard-list'
  };
</script>

<section id="services" class="py-24 relative overflow-hidden bg-[#f3efe4]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="mb-16">
      <span class="text-[10px] font-bold text-primary/60 tracking-[0.3em] uppercase mb-4 block">
        WHAT WE OFFER
      </span>
      <h2 class="text-4xl md:text-5xl font-light text-primary" style="font-family: 'Georgia', serif;">
        Our Services
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each config.services as service}
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-200 transition-all duration-300 hover:shadow-md">
          <!-- Icon Box with Emoji -->
          <div class="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-8 text-3xl">
            {#if service.icon === 'stethoscope'}
               <span>🩺</span>
            {:else if service.icon === 'shield-check'}
               <span>🛡️</span>
            {:else if service.icon === 'heartbeat' || service.icon === 'pill'}
               <span>💊</span>
            {:else}
              <span>📋</span>
            {/if}
          </div>

          <h3 class="text-2xl font-light text-primary mb-6" style="font-family: 'Georgia', serif;">
            {service.title}
          </h3>
          <p class="text-primary/60 text-lg leading-relaxed max-w-sm">
            {service.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
