<script lang="ts">
  const stats = [
    { value: '12+', label: 'YEARS EXPERIENCE' },
    { value: '4.9★', label: 'PATIENT RATING' },
    { value: '3,000+', label: 'PATIENTS SERVED' },
    { value: '24h', label: 'RESPONSE TIME' }
  ];
</script>

<section class="bg-secondary px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
  <div class="flex-1 w-full flex flex-col items-center text-center border-b border-white/10 md:border-b-0 md:border-r pb-8 md:pb-0 px-4 last:border-0 last:pb-0">
    <div class="font-display text-[40px] text-white font-light leading-none mb-2">
      12+
    </div>
    <div class="text-[11px] text-white/70 tracking-[0.18em] font-medium uppercase leading-tight">
      YEARS EXPERIENCE
    </div>
  </div>

  <div class="flex-1 w-full flex flex-col items-center text-center border-b border-white/10 md:border-b-0 md:border-r pb-8 md:pb-0 px-4 last:border-0 last:pb-0">
    <div class="font-display text-[40px] text-white font-light leading-none mb-2 flex items-baseline gap-0.5">
      4.9<span class="text-[28px] opacity-80">★</span>
    </div>
    <div class="text-[11px] text-white/70 tracking-[0.18em] font-medium uppercase leading-tight">
      PATIENT RATING
    </div>
  </div>

  <div class="flex-1 w-full flex flex-col items-center text-center border-b border-white/10 md:border-b-0 md:border-r pb-8 md:pb-0 px-4 last:border-0 last:pb-0">
    <div class="font-display text-[40px] text-white font-light leading-none mb-2">
      3,000+
    </div>
    <div class="text-[11px] text-white/70 tracking-[0.18em] font-medium uppercase leading-tight">
      PATIENTS SERVED
    </div>
  </div>

  <div class="flex-1 w-full flex flex-col items-center text-center px-4">
    <div class="font-display text-[40px] text-white font-light leading-none mb-2 flex items-baseline gap-0.5">
      24<span class="text-[28px] font-extralight opacity-80">h</span>
    </div>
    <div class="text-[11px] text-white/70 tracking-[0.18em] font-medium uppercase leading-tight">
      RESPONSE TIME
    </div>
  </div>
</section>
