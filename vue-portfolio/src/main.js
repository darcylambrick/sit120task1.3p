import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import callButton from './components/callButton.vue'

createApp(App).mount('#app')
createApp(callButton).mount('#callButton')