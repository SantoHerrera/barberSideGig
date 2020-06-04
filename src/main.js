import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log("here")

// what to do
//console.log all images in public.assets.portfiolio

//get  Masthead Avatar Image

//for loop through all publick/assets/portfoliol.length

//settimeout every two seconds and change src of masthead aceater image

//found on stack overflow, this should work
// const { readdirSync, statSync } = require('fs')
// const { join } = require('path')

// const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())


// or
// have Array

// const relativeImgPath = []

// for(let i = 0; i < relativeImgPath.length; i++) {
  // setTimeout for every two seconds
//   masterHeadSrc = `${relativeImgPath[i]}`
// }