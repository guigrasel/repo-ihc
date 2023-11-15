<template>
  <div class="row justify-around items-center bg-grey-10 full-width q-py-md">
    <q-icon name="mdi-arrow-left-circle" color="white" size="1.5rem" @click="$router.back()"/>
    <q-icon name="mdi-home" color="white" size="1.5rem" @click="$router.push({ path: '/' })"/>
    <q-icon name="mdi-logout" color="white" size="1.5rem"/>
  </div>
</template>