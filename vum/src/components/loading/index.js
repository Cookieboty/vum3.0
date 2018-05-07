import LoadingComponent from './src'

let instance
let defaults = {
  showValue: true,
  duration: 3000
}

export default {
  install (Vue, config) {
    if (!instance) {
      const LoadingPlugin = Vue.extend(LoadingComponent)
      instance = new LoadingPlugin({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
    }
    let loading = (option) => {
      let options = Object.assign(defaults, option)
      Object.getOwnPropertyNames(options).forEach(prop => {
        instance[prop] = options[prop]
      })
    }
    loading.close = () => {
      return new Promise((resolve) => {
        if (!instance || !instance.showValue) {
          resolve()
          return
        }
        instance.close()
      })
    }
    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    // Vue.prototype.$toast = Vue.$toast
    Vue.mixin({
      created () {
        this.$loading = Vue.$loading
      }
    })
  }
}
