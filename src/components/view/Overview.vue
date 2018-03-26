<template>
  <div id="overview">
    <img src="http://qcdn.hinotos.com/avatar.png" alt="" id="avator" @click="toAbout()">
    <h2>~南风有信~</h2>
    <div class="line"><span></span></div>
    <router-link class="blogToAbout" to="/blog">Blog</router-link>
    <p>Guangzhou, China</p>
  </div>
</template>

<script>
export default {
  methods: {
    toAbout: function(){
      this.$router.push('/about');
    }
  }
}
</script>


<style scoped>
#overview {
  height: 300px;
  margin: auto;
  margin-top: 30%;
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
}
#avator {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border: 1px solid #eee;
  /* cursor: pointer; */
}
#avator:hover {
  /* box-shadow: 0px 0px 0.5px #42b983;
  -moz-box-shadow: 0px 0px 0.5px #42b983;
  -webkit-box-shadow: 0px 0px 0.5px #42b983; */
  border: 1px solid #42b983;
  cursor: pointer;
}
.line{
  height: 1px;
  border-top: 1px solid #aaa;
  text-align: center;
  margin: 0 10%;
  margin-bottom: 20px;
}
.line span{
  background: #fff;
}
a, .router-link-active {
  text-decoration: none;
  color:#333;
}
a:hover {
  color: #42b983;
  text-decoration: underline;
}
</style>

