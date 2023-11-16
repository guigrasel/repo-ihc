<template>
  <div class="row justify-center">
    <div
      class="button col-5 bg-grey-10 q-py-sm q-ma-sm"
      @click="$router.push({ path: `${view}/hoje` })"
      >
      Hoje
    </div>

    <div
      class="button col-5 bg-grey-10 q-py-sm q-ma-sm"
      @click="$router.push({ path: `${view}/todos` })"
      >
      Todos
    </div>

    <div
      class="button col-5 bg-grey-10 q-py-sm q-ma-sm"
      @click="$router.push({ path: `${view}/concluidos` })"
      >
      Concluídos
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  view: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.button {
  border-radius: 8px
}
</style>