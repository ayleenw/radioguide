import { createApp } from 'vue';
import App from './App.vue';
import de from './assets/i18n/de.json';
import en from './assets/i18n/en.json';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    de: de,
    en: en,
  },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
