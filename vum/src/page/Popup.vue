<template>
  <div class="page">
    <simple-header title="Popup" :back-link="true"></simple-header>
    <Contented>
      <div class='demos-content-padded'>
        <p><m-button @click.native="show = true">Show Popup</m-button></p>
        <p><m-button @click.native="showFull = true">Show Full Screen Popup</m-button></p>
        <p><m-button @click.native="showCustom = true">Show Custom Popup</m-button></p>
      </div>
    </Contented>
    <popup v-model="show" :overlay-close='true'>
      <h2 class="demos-sub-title">Popup Content</h2>
      <div class="content-padded">
        <p>You can put any content here</p>
      </div>
    </popup>
    <popup v-model="showFull" :full="true">
      <h2 class="demos-sub-title">Full Page Popup</h2>
      <div class="content-padded">
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
      </div>
    </popup>
    <popup v-model="showCustom" title="Custom With Grids">
      <div class="grids">
        <a href="javascript:;" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/button.png" alt="">
          </div>
          <p class="grid_label">
            Button
          </p>
        </a>
        <a href="javascript:;" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/button.png" alt="">
          </div>
          <p class="grid_label">
            Button
          </p>
        </a>
        <a href="javascript:;" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/button.png" alt="">
          </div>
          <p class="grid_label">
            Button
          </p>
        </a>
      </div>
    </popup>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header/index'
import { Button } from '../components/buttons'
import Contented from '../components/content'
import Popup from '../components/popup'

export default {
  components: {
    SimpleHeader,
    Contented,
    Popup,
    'm-button': Button
  },
  data () {
    return {
      show: false,
      showFull: false,
      showCustom: false
    }
  }
}
</script>
