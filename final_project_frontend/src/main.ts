import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './assets/sass/main.scss';


createApp(App).use(router).use(createPinia()).mount('#app')