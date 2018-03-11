<template>
  <div id="overview">
    <img src="http://qcdn.hinotos.com/avatar.png" alt="" id="avator">
    <h2>~南风有信~</h2>
    <!-- <hr> -->
    <div class="line"><span></span></div>
    <route-link>Blog</route-link>
    <p>Guangzhou, China</p>
  </div>
</template>

<style scoped>
#overview {
  width: 640px;
  height: 300px;
  margin: auto;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#avator {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
hr {
  width: 400px;
  margin-bottom: 20px;
  height: 0px;
}
.line{
    height: 1px;
    border-top: 1px solid #aaa;
    text-align: center;
    margin: 0 120px;
    margin-bottom: 20px;
}
.line span{
    /* position: relative; */
    background: #fff;
    /* padding: 0 20px; */
}
</style>

