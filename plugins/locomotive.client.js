import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default defineNuxtPlugin(() => {
  const interval = ref(null);

  function initLocomotive() {
    if (!window.scroller) {
      window.scroller = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        reloadOnContextChange: true,
        smooth: true,
      });
    }

    clearInterval(interval.value);

    interval.value = setInterval(() => {
      window.scroller?.update();
    }, 3000);
  }

  function destroyLocomotive() {
    window.scroller?.stop();
    window.scroller?.destroy();
    window.scroller = undefined;
  }

  return {
    provide: {
      initLocomotive,
      destroyLocomotive,
    },
  };
});
