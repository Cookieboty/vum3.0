<template>
  <div class="page">
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSuccess: false,
      showError: true
    }
  },
  mounted () {
  //  Toast({
  //    message: '提示',
  //    duration: 1000
  //  })
    this.$toast({
      message: '提示'
    })
  },
  methods: {
    showToast (type) {
      type === 1 ? this.showSuccess = true : this.showError = true
    }
  }
}
</script>
