import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import '../css/app.css';
import './bootstrap';
import BubbleSort from './feature/BubbleSort.vue';


// const app = createApp({});
function createMyVuetify() {
    return createVuetify({
      components,
      directives,
    });
  }

// Object.keys(appComponents.default).forEach((key) => {
//     app.component(key,appComponents.default[key]);
// });
// app.use(vuetify);
// app.mount("#app");


// createApp(App).use(createMyVuetify()).mount("#app")
// createApp(Signup).use(createMyVuetify()).mount("#signup")
// createApp(VuetifyMain).use(createMyVuetify()).mount("#vuetifyMain")
createApp(BubbleSort).use(createMyVuetify()).mount("#bubbleSort")
