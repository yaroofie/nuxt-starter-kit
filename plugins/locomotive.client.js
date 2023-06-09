import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default defineNuxtPlugin(() => {
  const interval = ref(null);

  function initLocomotive() {
    destroyLocomotive();

    window.scroller = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      reloadOnContextChange: true,
      smooth: true,
    });

    interval.value = setInterval(() => {
      window.scroller?.update();
    }, 500);
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
