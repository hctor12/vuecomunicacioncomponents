<script setup>
import { onMounted, ref } from "vue";
const links = ref([]);

onMounted(() => {
  for (let i = 0; i < 3; i++) {
    let random = parseInt(Math.random() * 100) + 1;
    console.log(random);
    links.value.push({
      name: `Tabla ${random}`,
      path: `/tablamultiplicar/${random}`,
    });
  }
});
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
