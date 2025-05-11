export {}; // Ensure this file is treated as a module

declare global {
  interface CSS {
    paintWorklet: {
      addModule(moduleURL: string): void;
    };
  }
}

export default defineNuxtPlugin(() => {
  (async function () {
    if (!('paintWorklet' in CSS)) {
      await import('css-paint-polyfill');
    }

    (CSS as any).paintWorklet.addModule(
      `https://www.unpkg.com/css-houdini-squircle/squircle.min.js`
    );
  })();
});
