<script lang="ts">
  import { config } from '$lib/config';
</script>

<section id="services" class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-base font-semibold text-primary tracking-wide uppercase">Specialties</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text-main sm:text-4xl">
                Comprehensive Healthcare Services
            </p>
            <p class="mt-4 max-w-2xl text-xl text-text-muted mx-auto">
                Providing personalized medical care tailored to your unique needs.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each config.services as service}
                <div class="bg-bg-base rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                    <div class="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                         <!-- Simplified icon placeholder logic (normally you'd use an icon library like Lucide) -->
                         {#if service.icon === 'stethoscope'}
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                         {:else if service.icon === 'shield-check'}
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                         {:else if service.icon === 'heartbeat'}
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                         {:else}
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                         {/if}
                    </div>
                    
                    <h3 class="text-xl font-bold text-text-main mb-3">{service.title}</h3>
                    <p class="text-text-muted leading-relaxed">
                        {service.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
