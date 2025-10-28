<script setup>
import HijoDeporte from "./HijoDeporte.vue";
import { ref } from "vue";
const deportes = ref(["Curling", "Peonza", "Canicas", "Bolos"]);
let favorito = ref(null);
const seleccionarFavoritoParent = (deporteFavorito) => {
  console.log("Yo soy tu padre");
  favorito.value = deporteFavorito;
};
</script>

<template>
  <div>
    <h1 style="color: red">Padre Deportes</h1>
    <h2 style="background-color: yellow" v-if="favorito">
      Su deporte favorito es {{ favorito }}
    </h2>
    <hijo-deporte
      v-for="dep in deportes"
      :key="dep"
      :nombre-deporte="dep"
      v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"
    />
  </div>
</template>
