export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return; // ensure no SSR involvement

  nuxtApp.vueApp.directive('scrollto', {
    mounted(el, binding) {
      const { target, offset = 100 } = binding.value || {};

      const scrollToTarget = () => {
        const targetEl = document.getElementById(target);
        if (targetEl) {
          const y =
            targetEl.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top: y,
            behavior: 'smooth',
          });
        }
      };

      el.__scrollHandler__ = scrollToTarget;
      el.addEventListener('click', scrollToTarget);
    },

    beforeUnmount(el) {
      el.removeEventListener('click', el.__scrollHandler__);
      delete el.__scrollHandler__;
    },
  });
});
