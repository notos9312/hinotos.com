<template>
  <div id="blogHeader">
    <router-link class="toHome" to="/home">hinotos.com</router-link>
    <router-link class="toBlog" to="/blog">Blog</router-link>
  </div>
</template>

<style scoped>
#blogHeader {
  width: 100%;
  height: 25px;
  border-bottom: 1px solid #aaa;
  text-align: left;
  /* position: relative; */
  position: absolute;
  top: 5px;
}
.toHome, .toBlog {
  text-decoration: none;
  color: #aaa;
  font-size: 18px;
  position: absolute;
}
.toHome:hover, .toBlog:hover {
  color: #42b983;
  /* text-decoration: underline; */
}
.toHome:visited, .toBlog:visited {
  text-decoration: none;
}
.toHome {
  left: 0;
}
.toBlog {
  right: 0;
}
</style>
