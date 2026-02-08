<script setup lang="ts">
/* =========================
  imports
  ========================= */
import { RouterLink, useRoute } from "vue-router";
import { VIcon } from "vuetify/components";

/* =========================
  component name
  ========================= */
defineOptions({
  name: "Navbar",
});

/* =========================
  state
  ========================= */
const route = useRoute();
const links = [
  { to: "/basic-form", label: "Basic Form", icon: "mdi-form-textbox" },
  { to: "/validation-form", label: "Validation Form", icon: "mdi-shield-check-outline" },
];

</script>

<template>
  <nav
    class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
  >
    <div
      class="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5"
    >
      <RouterLink
        to="/"
        class="flex items-center gap-2.5 rounded-lg py-1.5 pr-1 transition-colors hover:bg-slate-100/80 hover:text-teal-600 sm:gap-3"
        :class="route.path === '/' ? 'text-teal-600' : 'text-slate-800'"
      >
        <span
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-600 sm:h-10 sm:w-10"
        >
          <VIcon icon="mdi-clipboard-edit" size="22" class="sm:text-[1.35rem]!" />
        </span>
        <span class="text-base font-semibold tracking-tight sm:text-lg">
          Practice Form
        </span>
      </RouterLink>
      <div class="flex gap-1.5 rounded-xl bg-slate-100/80 p-1.5 sm:gap-2 sm:p-2">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 sm:gap-2.5 sm:px-5 sm:py-3"
          :class="
            route.path === link.to
              ? 'bg-white text-teal-700 shadow-sm ring-1 ring-slate-200/60'
              : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-800'
          "
        >
          <VIcon :icon="link.icon" size="20" class="shrink-0" />
          <span>{{ link.label }}</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
