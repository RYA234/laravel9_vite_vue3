import { createApp } from 'vue';
import '../css/app.css';
import App from './App.vue';
import './bootstrap';
import Signup from './component/Signup.vue';
import VuetifyMain from './component/testUtils/VuetifyMain.vue';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(vuetify).mount("#app")
createApp(Signup).use(vuetify).mount("#signup")
createApp(VuetifyMain).use(vuetify).mount("#vuetifyMain")
