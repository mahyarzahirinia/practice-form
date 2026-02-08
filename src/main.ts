import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import { vuetifyInstance } from "./plugins/vuetify";

createApp(App).use(vuetifyInstance).mount("#app");
