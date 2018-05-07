<template>
  <div>
    <overlay :value="showValue" :transparent="true"></overlay>
    <div class="preloader-modal" v-if="showValue" transition="preloader-modal">
      <span class="preloader preloader-white"></span>
    </div>
  </div>
</template>

<script>
import Overlay from '../../overlay'

export default {
  components: {
    Overlay
  },
  props: {
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      showValue: false
    }
  },
  created () {
    if (this.value) {
      this.showValue = this.value
    }
  },
  methods: {
    close () {
      this.showValue = false
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    },
    showValue (val, oldVal) {
    }
  }
}
</script>

<style lang="less">
@import 'loading.less';
</style>
