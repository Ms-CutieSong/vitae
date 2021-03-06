// import './index.min.css';
import Vue from 'vue'
import app from './app.vue'
import router from './router.js'

// Vue.config.productionTip = false
new Vue({
    el: '#app',
    template: '<app/>',
    components: {
        app
    },
    router
})