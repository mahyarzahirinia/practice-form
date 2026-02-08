<script setup lang="ts">
/* =========================
  imports
  ========================= */
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

/* =========================
  component name
  ========================= */
defineOptions({
  name: "App",
});
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
