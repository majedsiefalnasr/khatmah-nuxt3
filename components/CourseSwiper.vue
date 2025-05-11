<template>
  <Swiper
    :modules="[Pagination]"
    :direction="'horizontal'"
    :grab-cursor="true"
    :breakpoints="breakpoints"
    class="course-swiper"
  >
    <SwiperSlide
      v-for="(course, index) in courses"
      :key="index"
      :style="{ backgroundImage: `url(${course.image})` }"
    >
      <div class="swiper-slide-content">
        <div class="title text-fancy">{{ course.title }}</div>
        <p>{{ course.description }}</p>
        <div class="cover" :style="{ background: course.cover }"></div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  interface Course {
    title: string;
    description: string;
    image: string;
    cover: string;
  }

  const courses: Course[] = [
    {
      title: 'Memorizing Quran',
      description:
        'Master the Quran through our guided "Memorizing Quran" course...',
      image: '/images/courses/memorizing-quran.png',
      cover:
        'linear-gradient(47deg, #ad8959 23.78%, rgba(173, 137, 89, 0) 84.29%)',
    },
    {
      title: 'Tajweed',
      description:
        'Master Quranic pronunciation and rhythm with our expert-led Tajweed course...',
      image: '/images/courses/tajweed.png',
      cover:
        'linear-gradient(47deg, #362814 23.78%, rgba(54, 40, 20, 0) 84.29%)',
    },
    {
      title: 'Igaza (reading)',
      description:
        'Unlock the power of expression through our Igaza (Reading) course...',
      image: '/images/courses/igaza-reading.png',
      cover:
        'linear-gradient(62deg, #03161c 22.36%, rgba(3, 22, 28, 0.02) 79.24%, rgba(84, 27, 18, 0) 79.25%)',
    },
    {
      title: 'Igaza (Memorizing-Hifz)',
      description:
        'Master Quranic memorization with our expert-led Igaza course...',
      image: '/images/courses/igaza-memorizing-hifz.png',
      cover:
        'linear-gradient(47deg, #5a0912 23.78%, rgba(90, 9, 18, 0) 84.29%)',
    },
    {
      title: 'Arabic Conversation',
      description:
        'Elevate your Arabic language skills with our Arabic Conversation course...',
      image: '/images/courses/arabic-conversation.png',
      cover:
        'linear-gradient(47deg, #2e2e2e 23.78%, rgba(46, 46, 46, 0) 84.29%)',
    },
    {
      title: 'Arabic for Kids',
      description:
        'Ignite a love for Arabic in your children with our fun and engaging course...',
      image: '/images/courses/arabic-for-kids.png',
      cover:
        'linear-gradient(47deg, #3d5c73 23.78%, rgba(61, 92, 115, 0) 84.29%)',
    },
  ];

  // Responsive Swiper options
  const breakpoints = {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 3.2,
      spaceBetween: 48,
    },
  };
</script>

<style scoped>
  .swiper {
    overflow: visible;
  }
  .swiper-slide {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 36px;
    padding-right: 80px;
    min-height: 400px;
    color: #fff;
    background-size: cover;
    mask: paint(squircle);
    mask-image: paint(squircle);
    -webkit-mask: paint(squircle);
    --squircle-smooth: 0.6;
    --squircle-radius: 24px;
    transition: 0.3s ease-out;
  }
  .swiper-slide:hover {
    transform: scale(1.1);
  }
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .title {
    font-size: 28px;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .swiper-slide p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }
</style>
