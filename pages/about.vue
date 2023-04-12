<template>
  <div data-scroll-container>
    <div data-scroll-section class="flex flex-col justify-center items-center gap-8">
      <h2 data-scroll data-scroll-speed="1">About page</h2>
      <nuxt-img src="/images/4k.jpg" sizes="sm:100vw md:50vw lg:800px" />
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
      <nuxt-img src="/images/4k.jpg" sizes="sm:100vw md:50vw lg:800px" lazy/>
      <NuxtLink :to="localPath('/')" class="mb-20">
        <button class="btn btn-primary">Back to home</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const localPath = useLocalePath();
onMounted(() => {
  if ( process.client ) useNuxtApp().$initLocomotive();
} );
</script>
