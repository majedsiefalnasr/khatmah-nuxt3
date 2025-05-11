<template>
  <div class="container py-5">
    <Navbar />
    <div v-if="course">
      <h1 class="text-primary">{{ course.title }}</h1>
      <p class="lead">{{ course.description }}</p>
      <NuxtImg
        v-if="course.image"
        :src="course.image"
        class="img-fluid rounded"
        placeholder="blurred"
        loading="lazy"
      />
    </div>
    <div v-else>
      <p>Course not found.</p>
    </div>
  </div>
</template>

<script setup>
  import Navbar from '~/components/Navbar.vue';
  const route = useRoute();

  const courses = {
    tajweed: {
      title: 'Tajweed',
      description:
        'Master Quranic pronunciation and rhythm with our expert-led Tajweed course.',
      image: '/images/courses/tajweed.png',
    },
  };

  const course = courses[route.params.slug];
</script>
