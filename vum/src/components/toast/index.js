import ToastComponent from './toast'

let instance
let defaults = {
  message: '',
  type: 'success',
  value: true,
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
    let toast = (options) => {
      options = Object.assign(defaults, options)
      for (let prop in options) {
        instance[prop] = options[prop]
      }
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
