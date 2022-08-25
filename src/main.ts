import 'babel-polyfill'
import FastClick from 'fastclick'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/common/css/app.scss'

FastClick.prototype.onTouchEnd = function (event: any) {
  if (event.target.hasAttribute('type') && event.target.getAttribute('type') === 'text') {
    event.preventDefault()
    return false
  }
}
const fastclick: any = FastClick
fastclick.attach(document.body)

const app = createApp(App)
app.use(store).use(router).mount('#app')
