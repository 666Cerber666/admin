import App from './App.vue';
import {createApp} from 'vue';

import router from './router.js';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import BurgerMenu from './components/BurgerMenu.vue';
import DialogExit from './components/DialogExit.vue';

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import './registerServiceWorker';

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component('burger-menu', BurgerMenu);
app.component('dialog-exit', DialogExit);
app.component('But-ton', Button);
app.component('Input-Text', InputText);


app.mount('#app')




