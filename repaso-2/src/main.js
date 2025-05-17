import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import {PrimeVue} from '@primevue/core'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Material from '@primeuix/themes/material';
import i18n from "./i18n.js";
import router from "./routes/index.js";
import {
    Button,
    Card,
    ConfirmationService,
    DialogService,
    InputText,
    SelectButton,
    ToastService,
    Toolbar
} from "primevue";

createApp(App)
    .use(i18n)
    .use(router)
    .use(PrimeVue, {theme: {preset: Material}, ripple: true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-select-button', SelectButton)
    .component('pv-card', Card)
    .component('pv-input-text', InputText)
    .mount('#app');

