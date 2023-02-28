import App from './/App.vue'
import {createApp} from 'vue'

import router from './router.js'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component('But-ton', Button);
app.component('Input-Text', InputText);


app.mount('#app')




