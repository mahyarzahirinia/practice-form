import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import BasicForm from "../views/BasicForm.vue";
import ValidationForm from "../views/ValidationForm.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/basic-form",
  },
  {
    path: "/basic-form",
    name: "BasicForm",
    component: BasicForm,
    meta: { title: "Basic Form" },
  },
  {
    path: "/validation-form",
    name: "ValidationForm",
    component: ValidationForm,
    meta: { title: "Validation Form" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
