<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps(["numero"]);
const emit = defineEmits(["sumar-numero"]);

const sumar = () => {
  emit("sumar-numero", props.numero);
};
</script>
<template>
  <div>
    <h1 style="color: blue">Número hijo: {{ props.numero }}</h1>
    <button @click="sumar">Sumar {{ props.numero }}</button>
  </div>
</template>
