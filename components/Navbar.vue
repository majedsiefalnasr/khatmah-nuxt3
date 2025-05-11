<template>
  <div class="navbar-container" ref="navbarContainer">
    <div
      ref="navbar"
      id="main_navbar"
      class="d-flex flex-column flex-sm-row align-items-center py-3 position-relative"
    >
      <NuxtLink
        to="/"
        class="d-flex align-items-center text-dark text-decoration-none"
      >
        <NuxtImg
          src="/images/Logo-Khatmah.png"
          height="48"
          alt="Khatmah"
          loading="lazy"
        />
      </NuxtLink>

      <button
        v-scrollto="{ target: 'section-contact', offset: 120 }"
        class="btn btn-primary d-inline-flex mt-3 mt-sm-0 ms-sm-auto"
      >
        Start Your Journey.
      </button>
    </div>
  </div>
</template>

<script setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  const navbar = ref(null);
  const navbarContainer = ref(null);
  let navbarOffset = 0;
  let navbarWidth = 0;
  let navbarHeight = 0;

  const handleScroll = () => {
    if (!navbar.value) return;

    if (window.scrollY >= 120) {
      navbar.value.classList.add('sticky');
      navbar.value.style.width = navbarWidth + 'px';
      navbarContainer.value.style.height = navbarHeight + 'px';
    } else {
      navbar.value.classList.remove('sticky');
      navbar.value.style.width = '';
      navbarContainer.value.style.height = '';
    }
  };

  const handleResize = () => {
    if (navbar.value) {
      navbarWidth = navbar.value.clientWidth;
      navbarHeight = navbar.value.clientHeight;
    }
  };

  onMounted(() => {
    if (!navbar.value) return;
    navbarOffset = navbar.value.offsetTop;
    navbarWidth = navbar.value.clientWidth;
    navbarHeight = navbar.value.clientHeight;

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  });
</script>

<style scoped>
  #main_navbar {
    z-index: 10000;
  }
  #main_navbar.sticky {
    position: fixed !important;
    top: 1rem;
    width: 100%;
    padding: 12px 12px 12px 24px;
    margin: 0 !important;
    background: #11664f0d;
    backdrop-filter: blur(10px);
    mask: paint(squircle);
    mask-image: paint(squircle);
    -webkit-mask: paint(squircle);
    -webkit-mask-size: 100%;
    mask-size: 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    --squircle-smooth: 0.6;
    --squircle-radius: 20px;
    animation-name: animation-mainNavbar;
    animation-duration: 600ms; /* Duration of the animation */
    animation-timing-function: cubic-bezier(
      0.39,
      0.575,
      0.565,
      1
    ); /* Timing function (e.g., ease, linear) */
  }
  @keyframes animation-mainNavbar {
    0% {
      transform: translateY(-200px);
    }
    100% {
      transform: translateY(0);
    }
  }
  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767.98px) {
    #main_navbar {
      width: 100%;
      padding: 12px 12px 12px 24px;
      margin: 0 !important;
      background: #ffffffa3;
      backdrop-filter: blur(10px);
      mask: paint(squircle);
      mask-image: paint(squircle);
      -webkit-mask: paint(squircle);
      -webkit-mask-size: 100%;
      mask-size: 100%;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      --squircle-smooth: 0.6;
      --squircle-radius: 20px;
    }
  }
</style>
