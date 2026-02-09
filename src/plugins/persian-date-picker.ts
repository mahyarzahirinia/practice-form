// src/plugins/persian-date-picker.ts
import type { App } from "vue";
import Vue3PersianDatetimePicker from "@pseudolime/vue3-persian-date-picker";
import "@pseudolime/vue3-persian-date-picker/dist/style.css";

export function registerPersianDatePicker(app: App) {
  app.use(Vue3PersianDatetimePicker, {
    name: "DatePicker",
    props: {
      format: "YYYY-MM-DD HH:mm",
      displayFormat: "jYYYY/jMM/jDD",
      placeholder: "انتخاب تاریخ",
      altFormat: "YYYY-MM-DD HH:mm",
    },
  });
}
