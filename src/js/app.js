// Import Vue
import { createApp } from 'vue';

import { createI18n } from 'vue-i18n';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      title: 'Indian Sign Language',
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
      f: 'F',
      g: 'G',
      h: 'H',
      i: 'I',
      j: 'J',
      k: 'K',
      l: 'L',
      m: 'M',
      n: 'N',
      o: 'O',
      p: 'P',
      q: 'Q',
      r: 'R',
      s: 'S',
      t: 'T',
      u: 'U',
      v: 'V',
      w: 'W',
      x: 'X',
      y: 'Y',
      z: 'Z',
      "0": '0',
      "1": '1',
      "2": '2',
      "3": '3',
      "4": '4',
      "5": '5',
      "6": '6',
      "7": '7',
      "8": '8',
      "9": '9',
      nothing: 'No sign detected.',
      img: 'static/png/en.png',
      
      en: 'English',
      settings: 'Adjust the prediction interval of the camera',
      developed: 'Developed by us',
      version: 'App Version: 1.0.0',
    },
  },
});

// Init App with i18n
const app = createApp(App).use(i18n);

// Register Framework7 Vue Components
registerComponents(app);

// Mount the App
app.mount('#app');
