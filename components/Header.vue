<template>
  <header class="d-flex flex-column">
    <Navbar />

    <div
      class="row row-cols-1 row-cols-md-2 my-5 row-gap-0 row-gap-sm-4"
      style="margin-top: 5rem !important"
    >
      <div class="col order-1 order-md-0 pe-5 pe-md-0 pe-lg-5">
        <div class="home-header mb-5 mt-5 mt-md-0">
          <div class="slogan text-fancy">
            Discovering the Joy of the Quran and Arabic
          </div>
          <h1 class="text-fancy">Made Easy!</h1>
          <p class="text-secondary">
            Online Quran classes for Tajweed, Hifz, and Arabic.
          </p>
        </div>

        <div>
          <div class="d-flex flex-wrap gap-2 gap-md-3 gap-lg-4 mb-2">
            <button
              v-scrollto="{ target: 'section-contact', offset: 120 }"
              class="btn btn-primary btn-lg"
            >
              Start Your Journey
            </button>
            <button
              v-scrollto="{ target: 'explore_courses', offset: 120 }"
              class="btn btn-secondary btn-lg"
            >
              Explore Courses
            </button>
          </div>
          <p class="text-secondary small mb-0">
            Free 2 sessions without a credit card or hidden fees.
          </p>
        </div>
      </div>

      <div class="col order-0 order-md-1">
        <div class="header-mask_images position-relative">
          <div>
            <NuxtImg
              src="/images/hero-1.png"
              alt="Khatmah: Start Your Journey"
              loading="lazy"
            />
          </div>
          <div>
            <NuxtImg
              src="/images/hero-2.png"
              alt="Khatmah: Start Your Journey"
              loading="lazy"
            />
          </div>
          <div>
            <NuxtImg
              src="/images/hero-3.png"
              alt="Khatmah: Start Your Journey"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import Navbar from '~/components/Navbar.vue';
</script>

<style scoped>
  .home-header .slogan {
    font-size: 48px;
    line-height: 120%; /* 57.6px */
  }
  .home-header h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 120%; /* 76.8px */
    margin: 1rem 0;
    background: linear-gradient(180deg, #000 53.96%, rgba(0, 0, 0, 0.4) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .home-header p {
    font-size: 20px;
    font-weight: 400;
    line-height: 140%; /* 28px */
  }
  .header-mask_images {
    height: 32rem;
  }
  .header-mask_images > * {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }
  .header-mask_images > *:nth-child(1) {
    transform: translate(-70%, -30%);
    -webkit-mask-image: url(/images/header-mask_image-1.svg);
    mask-image: url(/images/header-mask_image-1.svg);
  }
  .header-mask_images > *:nth-child(2) {
    transform: translate(-20%, -120%);
    -webkit-mask-image: url(/images/header-mask_image-2.svg);
    mask-image: url(/images/header-mask_image-2.svg);
  }
  .header-mask_images > *:nth-child(3) {
    transform: translate(40%, -45%);
    -webkit-mask-image: url(/images/header-mask_image-3.svg);
    mask-image: url(/images/header-mask_image-3.svg);
  }
  .header-mask_images > * > * {
    max-width: 100%;
  }
  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 991.98px) {
    .home-header .slogan {
      font-size: 32px;
    }
    .home-header h1 {
      font-size: 48px;
    }
    .home-header p {
      font-size: 16px;
    }
    .header-mask_images > * {
      width: 90%;
    }
    .header-mask_images > *:nth-child(1) {
      transform: translate(-50%, -30%);
    }
    .header-mask_images > *:nth-child(2) {
      transform: translate(0%, -120%);
    }
    .header-mask_images > *:nth-child(3) {
      transform: translate(55%, -45%);
    }
  }
  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767.98px) {
    .header-mask_images {
      height: 16rem;
    }
    .header-mask_images > * {
      width: 70%;
    }
    .header-mask_images > *:nth-child(1) {
      transform: translate(-100%, -55%);
    }
    .header-mask_images > *:nth-child(2) {
      transform: translate(-40%, -140%);
    }
    .header-mask_images > *:nth-child(3) {
      transform: translate(10%, -60%);
    }
  }
</style>
