import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'The Hangover', genre: 'Comedy' },
      { id: 2, title: 'Click', genre: 'Comedy' },
      { id: 3, title: 'American Pie', genre: 'Comedy' },
      { id: 4, title: 'I Love You Man', genre: 'Comedy' },
      { id: 5, title: 'Cars', genre: 'Family' },
      { id: 6, title: 'Toy Story', genre: 'Family' },
      { id: 7, title: 'Mi pobre angelito', genre: 'Family' },
      { id: 8, title: 'El Rey Leon', genre: 'Family' },
      { id: 9, title: '50 sombras de Grey', genre: 'Family' },
    ]
  },
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')