<script setup>
import { defineProps, defineEmits } from "vue";
import "../assets/css/comics.css";
const props = defineProps(["comic", "index"]);
const emit = defineEmits(["seleccionarFavoritoParent", "deleteComic"]);

const seleccionarFavorito = () => {
  emit("seleccionarFavoritoParent", props.comic.titulo);
};

const deleteComic = () => {
  emit("deleteComic", props.index);
};
</script>
<template>
  <div>
    <h2 style="color: blue">{{ props.comic.titulo }}</h2>
    <button @click="seleccionarFavorito">Seleccionar favorito</button>
    <button style="background-color: red; color: white" @click="deleteComic">
      Delete comic
    </button>
    <p>{{ props.comic.descripcion }}</p>
    <img :src="props.comic.imagen" />
    <h4
      :class="{
        rojo: props.comic.year <= 2000,
        verde: props.comic.year > 2000,
      }"
    >
      Year: {{ props.comic.year }}
    </h4>
  </div>
</template>
