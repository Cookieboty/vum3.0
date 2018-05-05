<template>
  <div>
    <simple-header title="Search"></simple-header>
    <Contented>
      <Search v-model="searchValue"></Search>
    </Contented>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header/index'
import Contented from '../components/content'
import Search from '../components/searchbar'

export default {
  components: {
    SimpleHeader,
    Contented,
    Search
  },
  data () {
    return {
      searchValue: ''
    }
  },
  watch: {
    searchValue (val) {
      console.log(val)
      this.$toast({
        message: val
      })
    }
  }
}
</script>
