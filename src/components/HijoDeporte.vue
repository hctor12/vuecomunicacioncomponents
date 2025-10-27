<script setup>
import { defineProps } from "vue";
const props = defineProps(["nombreDeporte"]);
console.log(props.nombreDeporte);
</script>

<template>
  <div>
    <h4>{{ props.nombreDeporte }}</h4>
  </div>
</template>
