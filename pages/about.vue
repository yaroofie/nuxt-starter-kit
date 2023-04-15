<template>
  <div data-scroll-container>
    <div
      data-scroll-section
      class="flex flex-col justify-center items-center gap-8"
    >
      <h2 data-scroll data-scroll-speed="1">About page</h2>
      <nuxt-img
        src="/images/4k.jpg"
        sizes="sm:100vw md:50vw lg:800px"
        data-fancybox
        data-caption="Caption #1"
        data-src="/images/4k.jpg"
      />
      <button class="btn" @click="toastMe">taost</button>
      <div>pos: {{x}}, {{y}}</div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
        class="swiper"
      >
        <SwiperSlide v-for="slide in 10" :key="slide">
          <strong>{{ slide }}</strong>
        </SwiperSlide>
      </Swiper>
      <!-- {{ store.count }} -->
      <FormKit type="form">
        <FormKit
          type="text"
          name="name"
          id="name"
          validation="required|not:Admin"
          label="Name"
          help="Enter your character's full name"
          placeholder="“Scarlet Sword”"
        />
        <FormKit
          type="select"
          label="Class"
          name="class"
          id="class"
          placeholder="Select a class"
          :options="['Warrior', 'Mage', 'Assassin']"
        />
      </FormKit>
      <nuxt-img src="/images/4k.jpg" sizes="sm:100vw md:50vw lg:800px" lazy />
      <NuxtLink :to="localPath('/')" class="mb-20">
        <button class="btn btn-primary">Back to home</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import Toastr from "toastr";
const { x, y } = useMouse()
const localPath = useLocalePath();
onMounted(() => {
  if (process.client) useNuxtApp().$initLocomotive();
});
function toastMe() {
  Toastr.success("Have fun storming the castle!", "Miracle Max Says");
}
</script>


<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  background-color: gold;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>