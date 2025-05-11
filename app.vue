<template>
  <div class="container py-3">
    <ClientOnly>
      <Header />
      <NuxtPage />
      <Footer />
    </ClientOnly>
  </div>
</template>

<script setup>
  import Footer from '~/components/Footer.vue';
  import Header from '~/components/Header.vue';
</script>
