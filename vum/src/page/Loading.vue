<template>
  <div class="page">
    <simple-header title="Preloader" :back-link="true"></simple-header>
    <Contented>
      <div class='demos-content-padded'>
        <p>3s之后结束</p>
        <p><m-button @click.native="showPreloader()">Show Preloader</m-button></p>
      </div>
    </Contented>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header/index'
import Contented from '../components/content'
import { Button } from '../components/buttons'

export default {
  components: {
    SimpleHeader,
    Contented,
    'm-button': Button
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPreloader () {
      this.$loading()
      setTimeout(() => {
        this.$loading.close()
      }, 3000)
    }
  }
}
</script>
