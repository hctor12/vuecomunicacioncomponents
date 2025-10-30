<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let num = route.params.num;
watch(
  () => route.params.num,
  (newNum) => {
    num = parseInt(newNum);
  }
);
</script>
<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <h1>Tabla Multiplicar</h1>
    <table border="1">
      <thead style="font-weight: bold">
        <tr>
          <td>Operación</td>
          <td>Resultado</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{ num }} * {{ i }}</td>
          <td>{{ num * i }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
