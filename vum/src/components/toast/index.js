import ToastComponent from './src'

let instance
let defaults = {
  message: '',
  type: 'success',
  showValue: true,
  duration: 3000
}

export default {
  install (Vue, config) {
    if (!instance) {
      const ToastPlugin = Vue.extend(ToastComponent)
      instance = new ToastPlugin({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
    }
    let toast = (option) => {
      let options = Object.assign(defaults, option)
      // for (let prop of Object.keys(options)) {
      // instance[prop] = options[prop]
      // }
      Object.getOwnPropertyNames(options).forEach(prop => {
        instance[prop] = options[prop]
      })
    }
    if (!Vue.$toast) {
      Vue.$toast = toast
    }
    // Vue.prototype.$toast = Vue.$toast
    Vue.mixin({
      created () {
        this.$toast = Vue.$toast
      }
    })
  }
}
