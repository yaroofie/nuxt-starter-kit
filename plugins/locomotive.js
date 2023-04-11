import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      LocomotiveScroll,
    },
  };
});
