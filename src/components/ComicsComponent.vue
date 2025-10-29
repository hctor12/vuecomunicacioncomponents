<script setup>
import ComicComponent from "./ComicComponent.vue";
import { ref } from "vue";

let comicFavorito = ref(null);
let comicForm = ref({
  titulo: "",
  imagen: "",
  descripcion: "",
  year: 0,
});
let comics = ref([
  {
    titulo: "Spiderman",
    imagen:
      "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
    descripcion: "Hombre araña",
    year: 1997,
  },
  {
    titulo: "Wolverine",
    imagen:
      "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
    descripcion: "Lobezno",
    year: 2003,
  },
  {
    titulo: "Guardianes de la Galaxia",
    imagen:
      "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
    descripcion: "Yo soy Groot",
    year: 2006,
  },
  {
    titulo: "Avengers",
    imagen:
      "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
    descripcion: "Los Vengadores",
    year: 1993,
  },
  {
    titulo: "Spawn",
    imagen:
      "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
    descripcion: "Al Simmons",
    year: 2000,
  },
  {
    titulo: "Batman",
    imagen:
      "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
    descripcion: "Murcielago",
    year: 2001,
  },
]);

const seleccionarFavoritoParent = (titulo) => {
  comicFavorito.value = titulo;
};

const createComic = () => {
  console.log(comicForm);
  comics.value.push(comicForm.value);
};

const deleteComic = (index) => {
  comics.value.splice(index, 1);
};
</script>
<template>
  <div>
    <h1>Comics Padre</h1>
    <div>
      <form v-on:submit.prevent="createComic">
        <label>Título::</label>
        <input type="text" v-model="comicForm.titulo" />
        <label>Imagen (URL):</label>
        <input type="text" v-model="comicForm.imagen" />
        <label>Descripción:</label>
        <input type="text" v-model="comicForm.descripcion" />
        <label>Año:</label>
        <input type="number" min="0" v-model="comicForm.year" />
        <button>Nuevo comic</button>
      </form>
    </div>
    <h4 v-if="comicFavorito" style="background-color: yellow">
      Comic Favorito: {{ comicFavorito }}
    </h4>
    <div id="comics">
      <comic-component
        v-for="(comic, i) in comics"
        :key="i"
        :comic="comic"
        :index="i"
        v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"
        v-on:deleteComic="deleteComic"
      />
    </div>
  </div>
</template>
