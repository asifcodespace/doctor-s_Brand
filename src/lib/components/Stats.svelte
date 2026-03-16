<script lang="ts">
  const stats = [
    { value: '12+', label: 'YEARS EXPERIENCE' },
    { value: '4.9★', label: 'PATIENT RATING' },
    { value: '3,000+', label: 'PATIENTS SERVED' },
    { value: '24h', label: 'RESPONSE TIME' }
  ];
</script>

<section class="bg-[#3A6354] py-16 relative z-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
      {#each stats as stat, i}
        <div class="flex flex-col items-center text-center px-4 {i !== stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}">
          <span class="text-3xl md:text-4xl font-light text-white mb-2" style="font-family: 'Georgia', serif;">
            {stat.value}
          </span>
          <span class="text-[9px] md:text-[10px] font-light text-white/80 tracking-[0.25em] uppercase">
            {stat.label}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
