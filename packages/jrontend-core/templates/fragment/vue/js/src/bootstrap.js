import { createApp } from 'vue'
import App from './components/App.vue'

// Mount function to start up the app
const mount = (el) => {
    const app = createApp(App)
    app.mount(el)
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

// We are running through container
// and we should export the mount function
export { mount }
