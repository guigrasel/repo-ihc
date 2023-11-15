<script setup lang="ts">
useHead({
  title: "terguino-app",
  meta: [
    { name: "description", content: "Opinionated Vite Starter Template" },
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#00aba9" : "#ffffff")),
    },
  ],
});
</script>

<template>
  <div class="bg-black window-height">
    <RouterView />
    <div class="footer fit">
      <div class="row justify-center">
        <span class="text-center">2023 - asdasdsad</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: relative;
  bottom: 1;
}
</style>


