import en from './assets/i18n/en.json';
import sc from './assets/i18n/sc.json';
import tc from './assets/i18n/tc.json';
import { createI18n } from 'vue-i18n';

const messages = {
  en,
  sc,
  tc,
};

const i18n = createI18n({
  locale: 'tc',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
