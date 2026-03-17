<script lang="ts">
  import { config } from '$lib/config';

  // Split qualifications by dash or space if needed to create badges
  const badges = config.doctor.qualifications.split(/[-]+/).map(b => b.trim()).filter(Boolean);
</script>

<section id="about" class="bg-white px-12 py-[88px] sm:px-5 sm:py-16">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-2 gap-10 items-center">
      
      <!-- Avatar Box -->
      <div class="relative about-img w-full h-[500px] bg-primary rounded-[16px] flex items-center justify-center overflow-hidden shadow-sm p-16">
        <div class="font-display text-[110px] text-mist italic font-light opacity-30 select-none">
          M.D.
        </div>
        <!-- Decorative Ring -->
        <div class="absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full border border-mist/10"></div>
      </div>

      <!-- Content -->
      <div class="flex flex-col justify-center lg:pl-4">
        <div class="text-[11px] tracking-[0.18em] uppercase text-secondary font-medium mb-3">About</div>
        <h2 class="font-display text-[42px] text-primary font-light mb-4 leading-[1.1]">
          {config.doctor.name}
        </h2>

        <!-- Qualifications Badges -->
        <div class="flex flex-wrap gap-2 mb-6">
          {#each badges as badge}
            <span class="bg-primary/8 text-primary px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wide">
              {badge}
            </span>
          {/each}
          {#if !badges.includes('MD')}
             <span class="bg-primary/8 text-primary px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wide">
              MD
            </span>
          {/if}
        </div>

        <div class="space-y-5 mb-8">
          <p class="text-[15px] text-mid leading-[1.8] opacity-90">
            {config.doctor.bio}
          </p>
          <p class="text-[15px] text-mid leading-[1.8] opacity-90">
            Her practice welcomes patients of all ages, offering both in-person and online consultations tailored to your schedule.
          </p>
        </div>

        <div class="pt-2">
          <a href="#contact" class="btn btn-primary inline-flex">
            Book a Visit
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  .about-img {
    height: 500px;
  }
  @media (max-width: 640px) {
    .about-img {
      height: 320px;
    }
  }
</style>
