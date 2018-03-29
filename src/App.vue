<template>
  <div id="app">
    <div class="container" align="center">
      <img src="./assets/logo.png" class="mainLogo">
      <div class="content">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
.mainLogo {
  width: 25%;
  height: 25%;
  -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
        box-shadow: 0 8px 6px -6px black;
}

body {
  margin-top: 1%;
}
</style>
