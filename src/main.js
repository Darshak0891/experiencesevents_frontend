 import { createApp } from 'vue'
import App from './App.vue'
import router from './routers';
import setAuthHeader from './utils/setAuthHeader';
window.axios = require('axios');

const data = localStorage.getItem("user-info");

if (data) {
    setAuthHeader(data);
} else {
    setAuthHeader(false)
}

createApp(App).use(router).mount('#app')



 