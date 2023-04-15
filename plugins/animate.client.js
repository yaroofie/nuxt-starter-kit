import { gsap } from "gsap";

export default defineNuxtPlugin(() => {
  function animateInVertically() {
    const tl = gsap.timeline();
    tl.fromTo(
      "[data-animate-in-vertically]",
      {
        opacity: 0,
        duration: 2000,
        translateX: "200%",
      },
      {
        opacity: 1,
        translateX: "0",
      }
    );
  }

  function animateInHorizontally() {
    const tl = gsap.timeline();
    tl.fromTo(
      "[data-animate-in-horizontally]",
      {
        opacity: 0,
        duration: 2000,
        translateY: "200%",
      },
      {
        opacity: 1,
        translateY: "0",
      }
    );
  }

  function animateAll() {
    animateInVertically();
    animateInHorizontally();
  }

  return {
    provide: {
      animateInVertically,
      animateInHorizontally,
      animateAll,
    },
  };
});
