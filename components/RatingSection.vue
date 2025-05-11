<template>
  <div class="section-rating">
    <div class="row justify-content-center mb-3 text-center">
      <div class="col col-md-8">
        <h4 class="text-fancy">
          Khatmah enjoyed the trust of a global community comprising more than
          5000 students.
        </h4>

        <div
          class="ratings d-flex flex-column flex-sm-row gap-5 justify-content-center text-center"
        >
          <div class="rating-item d-flex flex-column gap-1 align-items-center">
            <span class="rating-value text-fancy mb-2">4.9</span>
            <iconRating />
            <NuxtImg
              src="/images/rating-capterra.png"
              alt="Capterra Rating"
              placeholder="blurred"
              loading="lazy"
            />
          </div>
          <div class="rating-item d-flex flex-column gap-1 align-items-center">
            <span class="rating-value text-fancy mb-2">4.8</span>
            <iconRating />
            <NuxtImg
              src="/images/rating-trustpilot.png"
              alt="Trustpilot Rating"
              placeholder="blurred"
              loading="lazy"
            />
          </div>
          <div class="rating-item d-flex flex-column gap-1 align-items-center">
            <span class="rating-value text-fancy mb-2">4.8</span>
            <iconRating />
            <NuxtImg
              src="/images/rating-facebook.png"
              alt="Facebook Rating"
              placeholder="blurred"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import iconRating from '~/assets/icons/rating.svg';
</script>

<style scoped>
  .section-rating {
    padding-top: 4rem;
    padding-bottom: 5rem;
  }
  .section-rating h4 {
    font-size: 28px;
    font-weight: 600;
    line-height: 140%; /* 39.2px */
    margin-bottom: 3rem;
    background: linear-gradient(
      180deg,
      #141414 53.96%,
      rgba(20, 20, 20, 0.4) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .ratings .rating-item svg {
    margin: auto;
  }
  .ratings .rating-item img {
    max-width: 100%;
    max-height: 38px;
  }
  .ratings .rating-value {
    font-size: 48px;
    font-weight: 600;
    line-height: 120%; /* 57.6px */
  }
  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 991.98px) {
    .section-rating h4 {
      font-size: 24px;
    }
    .ratings .rating-value {
      font-size: 32px;
    }
    .ratings .rating-item svg {
      height: 20px;
    }
    .ratings .rating-item img {
      max-width: 100%;
      max-height: 32px;
    }
  }
  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767.98px) {
  }
</style>
