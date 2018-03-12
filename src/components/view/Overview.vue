<template>
  <div id="overview">
    <img src="http://qcdn.hinotos.com/avatar.png" alt="" id="avator" @click="toAbout()">
    <h2>~南风有信~</h2>
    <!-- <hr> -->
    <div class="line"><span></span></div>
    <router-link to="/blog">Blog</router-link>
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
  margin-top: 200px;
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
}
</style>

