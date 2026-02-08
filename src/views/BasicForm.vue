<script setup lang="ts">
/* =========================
  imports
  ========================= */
import { reactive } from "vue";

/* =========================
  component name
  ========================= */
defineOptions({
  name: "BasicForm",
});

/* =========================
  state
  ========================= */
const form = reactive({
  name: "",
  email: "",
  message: "",
});

/* =========================
  methods
  ========================= */
function handleSubmit() {
  console.log("Basic form submitted:", form);
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 px-4 py-8 sm:px-6 sm:py-12">
    <div class="mx-auto max-w-md">
      <div
        class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-900/5"
      >
        <div class="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-6 sm:px-8">
          <h1 class="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Basic Form Practice
          </h1>
          <p class="mt-1 text-sm text-slate-500">
            A simple contact-style form with name, email, and message.
          </p>
        </div>
        <form @submit.prevent="handleSubmit" class="space-y-5 px-6 py-6 sm:px-8 sm:py-8">
          <div>
            <label
              for="name"
              class="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              for="email"
              class="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              for="message"
              class="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="w-full resize-none rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            class="w-full rounded-xl bg-teal-600 px-4 py-3 font-semibold text-white shadow-lg shadow-teal-500/25 transition-all duration-200 hover:bg-teal-700 hover:shadow-teal-500/30 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-[0.99]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
