<template>
  <div>
    <overlay :value="showValue" :transparent="true"></overlay>
    <div class="toast-modal" v-if="showValue" transition="toast-modal">
      <div class="icon-wrap"><i class="icon" :class="iconType"></i></div>
      <div class="text">{{message}}</div>
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
    value: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    message: {
      type: String
    },
    type: {
      type: String,
      default: 'success'
    },
    duration: {
      type: Number,
      default: 3000
    },
    overlay: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showValue: false,
      iconType: 'icon-' + this.type
    }
  },
  created () {
    if (this.value) {
      this.showValue = this.value
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    },
    showValue (val, oldVal) {
      if (val) {
        setTimeout(() => {
          this.showValue = false
          this.$emit('input', val)
        }, this.duration)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import 'toast.less';
</style>
