<template>
  <div data-scroll-container>
    <div data-scroll-section>
      <div
        class="min-h-screen bg-base-100 flex flex-col justify-center items-center"
      >
        <h1
          data-scroll
          data-animate-in-vertically
          class="text-3xl font-bold underline mb-10"
        >
          {{ $t("welcome") }}!
        </h1>
        <div
          data-animate-in-horizontally
          class="card w-96 bg-primary text-primary-content"
        >
          <div class="card-body">
            <h2 class="card-title">Store counter is {{ store.count }}</h2>
            <Icon name="uil:github" />
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn" @click="store.increment">
                Increase counter
              </button>
              <button
                class="btn"
                @click="
                  Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool',
                  })
                "
              >
                Pretty Alert!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-scroll-section class="flex flex-col justify-center items-center">
      <h2 data-scroll data-scroll-speed="1">This is another section</h2>
      <p data-scroll data-scroll-speed="2" class="mb-10">😬</p>
      <nuxt-img
        src="/images/4k.jpg"
        sizes="sm:100vw md:50vw lg:800px"
        class="rounded-xl mb-10"
      />
      <!-- {{ store.count }} -->
      <FormKit type="form">
        <FormKit
          id="name"
          type="text"
          name="name"
          class="formkit-input mb-4"
          validation="required|not:Admin"
          label="Name"
          help="Enter your character's full name"
          placeholder="“Scarlet Sword”"
        />
        <FormKit
          id="class"
          type="select"
          label="Class"
          name="class"
          class="formkit-input mb-4"
          placeholder="Select a class"
          :options="['Warrior', 'Mage', 'Assassin']"
        />
      </FormKit>
      <NuxtLink :to="localPath('/about')" class="mb-20">
        <button class="btn btn-primary">About page</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
const store = useCounterStore();
const localPath = useLocalePath();
onMounted(() => {
  if (process.client) {
    const app = useNuxtApp();
    app.$animateAll();
  }
});
</script>
