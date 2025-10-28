<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps(["nombreDeporte"]);
const emit = defineEmits(["seleccionarFavoritoParent"]);
console.log(props.nombreDeporte);
const seleccionarFavorito = () => {
  console.log("Soy el hijo " + props.nombreDeporte);
  emit("seleccionarFavoritoParent", props.nombreDeporte);
};
</script>

<template>
  <div>
    <h4>{{ props.nombreDeporte }}</h4>
    <button @click="seleccionarFavorito">Seleccionar favorito</button>
  </div>
</template>
