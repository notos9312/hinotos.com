<template>
  <div id="blogHeader">
    <router-link class="toHome" to="/home">hinotos.com</router-link>
  </div>
</template>

<style scoped>
#blogHeader {
  width: 100%;
  height: 13%;
  border-bottom: 1px solid #aaa;
  text-align: left;
  position: absolute;
  top: 5px;
}
.toHome {
  text-decoration: none;
  color: #aaa;
  font-size: 22px;
}
.toHome:hover {
  color: #333;
}
</style>
