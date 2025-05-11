<template>
  <section id="explore_courses" class="section-explore_courses">
    <div class="row row-cols-1 row-cols-sm-2 align-items-end mb-5">
      <div class="col">
        <h2 class="text-fancy">
          Explore <br />
          Courses
        </h2>
      </div>
      <div class="col">
        <p class="text-secondary">
          Embark on a Journey of Knowledge: Discover Quran and Arabic Courses
        </p>
      </div>
    </div>

    <div class="row row-cols-1">
      <div class="col">
        <!-- Slider main container -->
        <CourseSwiper />
      </div>
    </div>
  </section>
</template>

<script setup>
  import CourseSwiper from '~/components/CourseSwiper.vue';
</script>

<style scoped>
  .section-explore_courses h2 {
    font-size: 48px;
    font-weight: 600;
    line-height: 120%;
    background: linear-gradient(
      180deg,
      #141414 53.96%,
      rgba(20, 20, 20, 0.4) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .section-explore_courses .swiper-slide {
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
  }
  .section-explore_courses .swiper-slide > .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .section-explore_courses .swiper-slide .title {
    font-size: 28px;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .section-explore_courses .swiper-slide p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }
  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 991.98px) {
    .section-explore_courses h2 {
      font-size: 40px;
    }
    .section-explore_courses .swiper-slide {
      padding: 24px;
      padding-right: 72px;
      min-height: 360px;
    }
    .section-explore_courses .swiper-slide .title {
      font-size: 24px;
    }
  }
  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767.98px) {
  }
</style>
