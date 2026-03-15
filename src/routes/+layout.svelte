<script lang="ts">
  import '../lib/styles/app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Dr. Avena - General Practitioner</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen flex flex-col bg-bg-base font-sans">
  <Header />
  
  <main class="flex-grow">
    <slot />
  </main>
  
  <Footer />
</div>
