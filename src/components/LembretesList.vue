<template>
  <div class="text-white q-mt-md">
    <div v-for="item in items" class="item row items-center justify-between text-left q-px-lg fit q-py-sm">
      <div class="column">
        <span class="text-subtitle1 text-bold">{{ item.title }}</span>
        <span>{{ item.data }}</span>
      </div>
      <div>
        <q-icon name="mdi-delete" size="1.5rem" color="red"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Lembrete {
  data: string;
  title: string;
  descricao: string;
}

defineProps({
  items: {
    type: Array as () => Lembrete[],
    default: () => []
  }
})
</script>

<style scoped>
.item {
  border-bottom: 2px solid rgb(44, 44, 44);
  border-top: 2px solid rgb(44, 44, 44);
}
</style>