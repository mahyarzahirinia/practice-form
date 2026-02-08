import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import { vuetifyInstance } from "./plugins/vuetify";

createApp(App).use(router).use(vuetifyInstance).mount("#app");
