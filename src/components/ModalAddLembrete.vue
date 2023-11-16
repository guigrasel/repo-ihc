<template>
  <q-dialog persistent>
    <q-card>
      <q-card-section class="row items-center">
        <div class="text-h5">{{ title }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-separator />

      <q-card-section>
        <slot />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalAddLembrete',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script> 