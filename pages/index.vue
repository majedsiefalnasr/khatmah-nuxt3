<template>
  <main>
    <!-- Rating Section -->
    <RatingSection />

    <!-- Explore Courses Section -->
    <ExploreCoursesSection />

    <!-- How it works Section -->
    <HowItWorksSection />

    <!-- FAQ Section -->
    <FAQSection />

    <!-- Contact Section -->
    <ContactSection />
  </main>
</template>

<script setup>
  import ContactSection from '~/components/ContactSection.vue';
  import ExploreCoursesSection from '~/components/ExploreCoursesSection.vue';
  import FAQSection from '~/components/FAQSection.vue';
  import HowItWorksSection from '~/components/HowItWorksSection.vue';
  import RatingSection from '~/components/RatingSection.vue';
</script>

<style scoped>
  main > section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
</style>
