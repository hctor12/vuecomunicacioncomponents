<script setup>
import { useRoute, useRouter } from "vue-router";
import { watch } from "vue";

const route = useRoute();
const router = useRouter();
let num = route.params.num ? parseInt(route.params.num) : 0;

//actualizar para volver a reenderizar al cambiar la ruta
watch(
  () => route.params.num,
  (newNum) => {
    // Si newNum es undefined, asignar 0
    num = newNum ? parseInt(newNum) : 0;
  }
);
</script>
<template>
  <div>
    <h1 style="color: blue">Numero Doble</h1>
    <p>
      El número doble es:
      <span :class="num > 0 ? 'green' : 'red'">{{ num * 2 }}</span>
    </p>
    <!-- Ir a / al pulsar el button -->
    <button @click="router.push('/')">Home</button>
  </div>
</template>

<style>
.green {
  color: green;
}

.red {
  color: red;
}
</style>
