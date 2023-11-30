<template>
  <div class="overflow bg-black fit">
    <HeaderIndex />
    <RouterView />
    <div class="footer text-center bg-grey-10 full-width q-py-sm">
      <span class="text-center text-grey-6 text-bold">2023 - Terguino Lembretes</span>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
}
</style>


