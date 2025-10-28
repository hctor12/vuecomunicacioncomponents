<script setup>
import NumeroHijo from "./NumeroHijo.vue";
import { ref } from "vue";
let suma = ref(0);
let numeros = ref([14, 22]);

const sumarNumero = (num) => {
  suma.value = suma.value + parseInt(num);
};

const generarNumero = () => {
  let random = parseInt(Math.random() * 100) + 1;
  numeros.value.push(random);
};
</script>
<template>
  <div>
    <h1>Numeros Padre</h1>
    <h2 style="color: red">La suma es: {{ suma }}</h2>
    <button @click="generarNumero">Nuevo Número</button>
    <div>
      <numero-hijo
        v-for="(num, i) in numeros"
        :key="i"
        :numero="num"
        v-on:sumar-numero="sumarNumero"
      />
    </div>
  </div>
</template>
