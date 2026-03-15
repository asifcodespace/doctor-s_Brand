<script lang="ts">
    import { config } from '$lib/config';
</script>

<section id="about" class="py-24 bg-bg-base relative overflow-hidden">
    <!-- Decorative element -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary opacity-30 blur-3xl"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            <!-- Information Box (replaces standard image) -->
            <div class="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12 mb-12 lg:mb-0">
                <div class="absolute top-0 right-0 w-32 h-32 bg-primary rounded-bl-full -z-10 opacity-10"></div>
                <h3 class="text-3xl font-extrabold text-primary mb-6 border-b-2 border-secondary pb-4 inline-block">
                    {config.doctor.name}
                </h3>
                
                <div class="space-y-6">
                    <div class="flex items-start">
                        <div class="flex-shrink-0 bg-secondary/50 rounded-full p-2 mr-4 text-primary mt-1">
                             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-text-muted uppercase tracking-wider">Experience</p>
                            <p class="text-lg font-medium text-text-main">15+ Years</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                         <div class="flex-shrink-0 bg-secondary/50 rounded-full p-2 mr-4 text-primary mt-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-text-muted uppercase tracking-wider">Qualifications</p>
                            <p class="text-lg font-medium text-text-main">{config.doctor.qualifications}</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                         <div class="flex-shrink-0 bg-secondary/50 rounded-full p-2 mr-4 text-primary mt-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-text-muted uppercase tracking-wider">Specialty</p>
                            <p class="text-lg font-medium text-text-main">{config.doctor.title}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bio Text -->
            <div class="lg:pl-8">
                <h2 class="text-base font-semibold text-primary tracking-wide uppercase">About The Doctor</h2>
                 <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text-main sm:text-4xl mb-6">
                    A Commitment to Your Well-being
                </p>
                <div class="text-lg text-text-muted space-y-6 leading-relaxed">
                    <p>
                        {config.doctor.bio}
                    </p>
                     <p>
                        Our practice is built on the foundation of trust, empathy, and evidence-based medicine. We strive to create a comfortable and welcoming environment where every patient feels heard and valued.
                    </p>
                </div>
                
                <div class="mt-10">
                    <a href="#contact" class="btn-primary inline-flex items-center">
                        Contact Clinic
                         <svg class="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>

        </div>
    </div>
</section>
