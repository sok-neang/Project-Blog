
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'
import BaseButton from './components/ui/base/BaseButton.vue';
import BaseInput from './components/ui/base/BaseInput.vue';
import BaseModal from './components/ui/base/BaseModal.vue';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('base-button', BaseButton)
app.component('base-input', BaseInput)
app.component('base-modal', BaseModal)

app.mount('#app')
