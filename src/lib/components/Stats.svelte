<script lang="ts">
  const stats = [
    { value: '12+', label: 'YEARS EXPERIENCE' },
    { value: '4.9★', label: 'PATIENT RATING' },
    { value: '3,000+', label: 'PATIENTS SERVED' },
    { value: '24h', label: 'RESPONSE TIME' }
  ];
</script>

<section class="bg-secondary px-12 py-12 flex flex-row sm:flex-col gap-0">
  {#each stats as stat, i}
    <div class="flex-1 text-center border-r sm:border-r-0 sm:border-b border-white/15 px-6 sm:py-4 last:border-0 last:px-0">
      <div class="font-display text-[40px] text-white font-light">
        {stat.value}
      </div>
      <div class="text-[11px] text-white/65 tracking-widest uppercase mt-1">
        {stat.label}
      </div>
    </div>
  {/each}
</section>
