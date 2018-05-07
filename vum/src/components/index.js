import Toast from '@/components/toast'
import Loading from '@/components/loading'

export default {
  install (Vue, config) {
    Vue.use(Toast)
    Vue.use(Loading)
  }
}
