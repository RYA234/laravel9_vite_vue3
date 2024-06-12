import './bootstrap';
import '../css/app.css';
import {createApp} from 'vue'
import App from './App.vue'
import Signup from './component/Signup.vue'
createApp(App).mount("#app")
createApp(Signup).mount("#signup")
