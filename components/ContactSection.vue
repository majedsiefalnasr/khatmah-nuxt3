<template>
  <section id="section-contact" class="section-contact">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 text-center">
        <div class="subtitle text-fancy">
          Discovering the Joy of the Quran and Arabic
        </div>
        <h2 class="text-fancy">Made Easy!</h2>
        <p class="text-secondary">
          Online Quran classes for Tajweed, Hifz, and Arabic.
        </p>
      </div>

      <div class="col-12 col-md-6">
        <form @submit.prevent="submitForm" id="registrationForm">
          <div class="mb-3">
            <label for="client_name" class="form-label text-secondary"
              >Full Name</label
            >
            <input
              v-model="clientName"
              type="text"
              class="form-control"
              id="client_name"
              placeholder="First, Last"
              required
            />
            <div class="invalid-feedback">Please enter your name.</div>
          </div>

          <div class="mb-5">
            <label for="client_course" class="form-label text-secondary"
              >Course</label
            >
            <select
              v-model="clientCourse"
              class="form-select"
              id="client_course"
              required
            >
              <option value="" disabled>Select Course</option>
              <option value="Memorizing Quran">Memorizing Quran</option>
              <option value="Tajweed">Tajweed</option>
              <option value="Igaza (Reading)">Igaza (Reading)</option>
              <option value="Igaza (Memorizing Hifz)">
                Igaza (Memorizing Hifz)
              </option>
              <option value="Arabic Conversation">Arabic Conversation</option>
              <option value="Arabic for Kids">Arabic for Kids</option>
            </select>
            <div class="invalid-feedback">Please select a valid course.</div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary btn-lg w-100 mb-2">
              Start Your Journey
            </button>
            <p class="text-secondary small">
              Free 2 sessions without a credit card or hidden fees.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';

  const clientName = ref('');
  const clientCourse = ref('');

  function submitForm() {
    if (!clientName.value || !clientCourse.value) {
      alert('Please fill in all required fields.');
      return;
    }

    const message = `Hi, I'm ${clientName.value}. I'm interested in the ${clientCourse.value} course.`;
    const whatsappURL = `https://wa.me/201200384332?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }
</script>

<style scoped>
  .section-contact h2 {
    font-size: 64px;
    font-weight: 600;
    line-height: 120%; /* 57.6px */
    text-transform: capitalize;
    margin: 16px 0 32px 0;
    background: linear-gradient(
      180deg,
      #141414 53.96%,
      rgba(20, 20, 20, 0.4) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .section-contact .subtitle {
    font-size: 32px;
    font-weight: 400;
    line-height: 120%; /* 57.6px */
  }
  .section-contact label {
    font-size: 14px;
    font-weight: 400;
    line-height: 120%; /* 14.4px */
  }
  .section-contact input,
  .section-contact select {
    border: none;
    padding: 12px 24px;
    mask: paint(squircle);
    mask-image: paint(squircle);
    -webkit-mask: paint(squircle);
    --squircle-smooth: 0.6;
    --squircle-radius: 24px;
  }
  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 991.98px) {
    .section-contact h2 {
      font-size: 48px;
    }
    .section-contact .subtitle {
      font-size: 24px;
    }
  }
  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767.98px) {
  }
</style>
