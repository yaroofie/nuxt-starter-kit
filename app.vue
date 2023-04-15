<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui";
onMounted(() => {
  Fancybox.bind("[data-fancybox]");
});
useRouter().beforeEach(() => {
  useNuxtApp().$destroyLocomotive();
});
useRouter().afterEach(() => {
  Fancybox.bind("[data-fancybox]");
});
</script>
