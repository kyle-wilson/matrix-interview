<template>
  <div id="app">
    <matrix></matrix>
  </div>
</template>

<script>
import Matrix from './Matrix.vue';

export default {
  name: 'app',

  components: {
    'matrix': Matrix
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
