<script lang="ts">
  import '../lib/styles/app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Dr. Avena - General Practitioner</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen flex flex-col bg-white font-body">
  <Header />
  
  <main class="grow">
    <slot />
  </main>
  
  <Footer />
</div>
