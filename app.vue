<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
useRouter().beforeEach( () =>
{
  useNuxtApp().$destroyLocomotive();
} )
</script>