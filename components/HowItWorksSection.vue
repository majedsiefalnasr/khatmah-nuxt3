<template>
  <section class="section-how_it_works">
    <div class="row justify-content-center text-center">
      <div class="col-12 col-md-8">
        <h2 class="text-fancy">How It Works</h2>
      </div>

      <div class="col-12 col-md-10">
        <div
          class="steps d-flex flex-column flex-md-row gap-4 gap-md-5 justify-content-between"
        >
          <div
            class="d-flex flex-md-column align-items-center align-items-md-start gap-4 gap-md-0"
          >
            <iconPlanning />

            <div class="text-start text-md-center">
              <div class="title text-fancy">Planning</div>
              <p class="text-secondary">Pick a course and create your goal.</p>
            </div>
          </div>

          <div
            class="d-flex flex-md-column flex-row-reverse flex-md-row align-items-center align-items-md-start gap-4 gap-md-0"
          >
            <iconScheduling />

            <div class="text-start text-md-center">
              <div class="title text-fancy">Scheduling</div>
              <p class="text-secondary">
                Share your availability and make your schedule.
              </p>
            </div>
          </div>

          <div
            class="d-flex flex-md-column align-items-center align-items-md-start gap-4 gap-md-0"
          >
            <iconStudying />

            <div class="text-start text-md-center">
              <div class="title text-fancy">Studying</div>
              <p class="text-secondary">Pay and start your classes.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-8">
        <button
          v-scrollto="{ target: 'section-contact', offset: 120 }"
          class="btn btn-primary btn-lg mb-2"
          href="#"
        >
          Start Your Journey
        </button>
        <p class="text-secondary small">
          Free 2 sessions without a credit card or hidden fees.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import iconPlanning from '~/assets/icons/planning.svg';
  import iconScheduling from '~/assets/icons/scheduling.svg';
  import iconStudying from '~/assets/icons/studying.svg';
</script>

<style scoped>
  .section-how_it_works h2 {
    font-size: 48px;
    font-weight: 600;
    line-height: 120%; /* 57.6px */
    text-transform: capitalize;
    margin-bottom: 48px;
    background: linear-gradient(
      180deg,
      #141414 53.96%,
      rgba(20, 20, 20, 0.4) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .section-how_it_works .steps {
    padding: 64px 0;
  }
  .section-how_it_works .steps .title {
    margin: 24px 0;
    font-size: 32px;
    font-weight: 600;
    line-height: 110%;
  }
  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 991.98px) {
    .section-how_it_works h2 {
      font-size: 40px;
    }
    .section-how_it_works .steps {
      padding: 48px 0;
    }
    .section-how_it_works .steps .title {
      margin: 20px 0;
      font-size: 24px;
    }
  }
  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767.98px) {
  }
</style>
