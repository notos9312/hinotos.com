<template>
  <div id="blog">
    <blog-header></blog-header>
    <div id="blog-container">
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <!-- <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1>
      <h1>this is Blog</h1> -->
    </div>
    <!-- <blog-footer></blog-footer> -->
  </div>
</template>

<script>
import BlogHeader from "@/components/public/BlogHeader"
import BlogFooter from "@/components/public/BlogFooter"
export default {
  components:{
    BlogHeader,
    BlogFooter
  }
}
</script>


<style scoped>
  #blog {
    min-height: 100%;
  }
  /* blog-footer {
    position: absolute;
    bottom: 0%;
  } */
  #blog-container {
    padding: 10% 0;
  }
</style>

