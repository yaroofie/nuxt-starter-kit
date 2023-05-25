<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
onMounted(() => {
  if(process.client) useNuxtApp().$initLocomotive();
})
useRouter().afterEach(() => {
  useNuxtApp().$initLocomotive();
} );
useRouter().beforeEach( () =>
{
  useNuxtApp().$destroyLocomotive();
})
</script>
