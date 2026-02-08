<script setup lang="ts">
/* =========================
  imports
  ========================= */
import { reactive, computed } from "vue";

/* =========================
  component name
  ========================= */
defineOptions({
  name: "ValidationForm",
});

/* =========================
  state
  ========================= */
const form = reactive({
  username: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
});

const errors = reactive({
  username: "",
  password: "",
  confirmPassword: "",
  acceptTerms: "",
});

/* =========================
  computed
  ========================= */
const isFormValid = computed(() => {
  return (
    !errors.username &&
    !errors.password &&
    !errors.confirmPassword &&
    !errors.acceptTerms &&
    form.username.length >= 3 &&
    form.password.length >= 6 &&
    form.password === form.confirmPassword &&
    form.acceptTerms
  );
});

/* =========================
  methods
  ========================= */
function validateUsername() {
  if (form.username.length < 3) {
    errors.username = "Username must be at least 3 characters";
  } else {
    errors.username = "";
  }
}

function validatePassword() {
  if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else {
    errors.password = "";
  }
  if (form.confirmPassword && form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  } else if (form.confirmPassword) {
    errors.confirmPassword = "";
  }
}

function validateConfirmPassword() {
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  } else {
    errors.confirmPassword = "";
  }
}

function validateTerms() {
  errors.acceptTerms = form.acceptTerms ? "" : "You must accept the terms";
}

function handleSubmit() {
  validateUsername();
  validatePassword();
  validateConfirmPassword();
  validateTerms();
  if (isFormValid.value) {
    console.log("Validation form submitted:", form);
  }
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
            Validation Form Practice
          </h1>
          <p class="mt-1 text-sm text-slate-500">
            Form with client-side validation and error messages.
          </p>
        </div>
        <form @submit.prevent="handleSubmit" class="space-y-5 px-6 py-6 sm:px-8 sm:py-8">
          <div>
            <label
              for="username"
              class="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Username
            </label>
            <input
              id="username"
              v-model="form.username"
              type="text"
              class="w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2"
              :class="
                errors.username
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
              "
              placeholder="min 3 characters"
              @blur="validateUsername"
            />
            <p
              v-if="errors.username"
              class="mt-1.5 flex items-center gap-1 text-sm text-red-600"
            >
              <span class="text-red-500">•</span>
              {{ errors.username }}
            </p>
          </div>
          <div>
            <label
              for="password"
              class="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              class="w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2"
              :class="
                errors.password
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
              "
              placeholder="min 6 characters"
              @blur="validatePassword"
            />
            <p
              v-if="errors.password"
              class="mt-1.5 flex items-center gap-1 text-sm text-red-600"
            >
              <span class="text-red-500">•</span>
              {{ errors.password }}
            </p>
          </div>
          <div>
            <label
              for="confirmPassword"
              class="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              type="password"
              class="w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2"
              :class="
                errors.confirmPassword
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
              "
              placeholder="repeat password"
              @blur="validateConfirmPassword"
            />
            <p
              v-if="errors.confirmPassword"
              class="mt-1.5 flex items-center gap-1 text-sm text-red-600"
            >
              <span class="text-red-500">•</span>
              {{ errors.confirmPassword }}
            </p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
            <label
              class="flex cursor-pointer items-start gap-3"
            >
              <input
                v-model="form.acceptTerms"
                type="checkbox"
                class="mt-0.5 h-5 w-5 rounded border-slate-300 text-teal-600 focus:ring-2 focus:ring-teal-500/20"
                @change="validateTerms"
              />
              <span class="text-sm text-slate-700">
                I accept the terms and conditions
              </span>
            </label>
            <p
              v-if="errors.acceptTerms"
              class="mt-2 flex items-center gap-1 pl-8 text-sm text-red-600"
            >
              <span class="text-red-500">•</span>
              {{ errors.acceptTerms }}
            </p>
          </div>
          <button
            type="submit"
            class="w-full rounded-xl px-4 py-3 font-semibold text-white shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none active:scale-[0.99]"
            :class="
              isFormValid
                ? 'bg-teal-600 shadow-teal-500/25 hover:bg-teal-700 hover:shadow-teal-500/30 focus:ring-teal-500'
                : 'bg-slate-400 cursor-not-allowed'
            "
            :disabled="!isFormValid"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
