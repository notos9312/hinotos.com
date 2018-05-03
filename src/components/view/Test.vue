<template>
  <div class="md-content">
  <div class="div1 clearfloat">
    <div class="left">Left</div>
    <div class="right">Right</div>
    <!-- <div class="clearfloat"></div> -->
  </div>
  <div class="div2">
    div2
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.div1 {
  background: #000080;
  border: 1px solid red;
}
.div2 {
  background: #800080;
  border: 1px solid red;
  height: 100px;
  margin-top: 10px;
}

.left {
  float: left;
  width: 20%;
  height: 200px;
  background: #ddd;
}
.right {
  float: right;
  width: 30%;
  height: 80px;
  background: #ddd;
}
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfloat {
  zoom: 1;
  /* visibility: hidden;
  display: block;
  clear: both; */
}
</style>



