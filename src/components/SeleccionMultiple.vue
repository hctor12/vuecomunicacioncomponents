<script setup>
import { ref } from "vue";
const options = ref(["Test1", "Test2", "Test3"]);
let seleccionados = ref([]);
let aux = ref([]);

const getSeleccionados = () => {
  aux.value = [];
  aux.value = seleccionados.value;

  console.log(aux);
};
</script>
<template>
  <div>
    <h1>Selección Múltiple</h1>
    <select multiple v-model="seleccionados">
      <option v-for="(op, i) in options" :key="i" :value="op">{{ op }}</option>
    </select>
    <button @click="getSeleccionados">Mostrar selecionados</button>
    <h4 style="color: blue" v-if="aux.length != 0">
      {{ aux.toString() }}
    </h4>
  </div>
</template>
