import { createRouter, createWebHistory } from "vue-router";
import ComicsComponent from "./components/ComicsComponent.vue";
import PadreDeportes from "./components/PadreDeportes.vue";
import NumerosPadre from "./components/NumerosPadre.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const rutas = [
  { path: "/", component: PadreDeportes },
  { path: "/comics", component: ComicsComponent },
  { path: "/numeros", component: NumerosPadre },
  { path: "/numerodoble/:num?", component: NumeroDoble },
  { path: "/tablamultiplicar/:num", component: TablaMultiplicar },
];

const router = createRouter({
  history: createWebHistory(),
  routes: rutas,
});

export default router;
