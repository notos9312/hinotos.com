<template>
  <div id="blogHeader">
    <router-link class="toHome" to="/home">hinotos.com</router-link>
    <router-link class="toAbout" to="/about">About</router-link>
    <router-link class="toBlog" to="/blog">Blog</router-link>
  </div>
</template>

<style scoped>
#blogHeader {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #888;
  text-align: left;
  /* position: relative; */
  position: absolute;
  top: 5px;
}
.toHome, .toBlog, .toAbout {
  text-decoration: none;
  color: #aaa;
  font-size: 18px;
  /* position: absolute; */
}
.toHome:visited, .toBlog:visited, .toAbout:visited {
  text-decoration: none;
  color: #aaa;
}
.toHome:hover {
  color: #42b983;
}
.toHome {
  float: left;
}
.toBlog, .toAbout {
  float: right;
  margin-left: 18px;
}

</style>
