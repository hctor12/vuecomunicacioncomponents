<script setup>
import { ref, computed } from "vue";
let numeros = ref([14, 22, 1]);
let selecteds = ref([]);

// Propiedad computada para calcular la suma
const suma = computed(() => {
  return selecteds.value.reduce((total, num) => total + num, 0);
});

const generarNumeros = () => {
  let random = parseInt(Math.random() * 100) + 1;
  numeros.value.push(random);
  console.log(selecteds.value);
};
</script>
<template>
  <div>
    <h1>Ejemplo Checkbox</h1>
    <button @click="generarNumeros">Generar Checkbox</button>
    <div>
      <label v-for="(num, i) in numeros" :key="i">
        <input type="checkbox" :value="num" v-model="selecteds" />
        {{ num }}
      </label>
    </div>
    <h2 style="color: blue">La suma seleccionada es {{ suma }}</h2>
  </div>
</template>
