<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  position: relative;
}
html, body, #app {
  min-height: 100%;
}

/* body {
  margin-top: -8px;
  margin-bottom: -8px;
} */

@media (min-width:700px) {
  #app {
    width: 640px;
  }
}
@media (max-width:699px) {
  #app {
    width: 95%;
  }
}
</style>
