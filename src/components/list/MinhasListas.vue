<template>
  <div class="column bg-grey-10 lista q-mt-sm">
    <div v-for="(item, index) in itens" :key="index" class="row shadow-1" @click="$router.push({path: item.path})">
      <span class="q-pl-sm item q-py-md text-white">
        <q-icon :name="item.icon" size="1.20rem" class="q-pa-xs bg-primary icon"/> <span class="q-pl-xs text-subtitle1">{{ item.title }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const itens = [
  {
    title: 'Eletrodomésticos',
    icon: 'mdi-blender',
    path: '/eletrodomesticos'
  },
  {
    title: 'Carro',
    icon: 'mdi-car',
    path: '/carro'
  },
  {
    title: 'Casa',
    icon: 'mdi-home',
    path: '/casa'
  },
  {
    title: 'Outros',
    icon: 'mdi-format-list-bulleted',
    path: '/outros'
  },
]
</script>

<style scoped>
.icon {
  border-radius: 100%;
}

.lista {
  border-radius: 7px;
}
</style>