<script setup>
import { ref } from "vue";
const links = ref([
  { name: "Deportes", path: "/" },
  { name: "Comics", path: "/comics" },
  { name: "Números", path: "/numeros" },
  { name: "Doble SIN", path: "/numerodoble/" },
  { name: "Doble 77", path: "/numerodoble/77" },
  { name: "Doble 33", path: "/numerodoble/33" },
  { name: "Doble 22", path: "/numerodoble/22" },
]);
</script>
<template>
  <nav>
    <ul
      style="
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 10px;
      "
    >
      <li v-for="(link, i) in links" :key="i">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
