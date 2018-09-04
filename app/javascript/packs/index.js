import Vue from 'vue'
import Index from './components/index.vue'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('index'))
  const index = new Vue({
    el,
    render: h => h(Index)
  })

  console.log(index)
})