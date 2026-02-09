import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import { vuetifyInstance } from "./plugins/vuetify";
// Persian date picker
import { registerPersianDatePicker } from "./plugins/persian-date-picker";

const app = createApp(App);
app.use(router);
app.use(vuetifyInstance);
registerPersianDatePicker(app);
app.mount("#app");
