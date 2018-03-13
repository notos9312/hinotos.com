<template>
  <div id="blog">
    <blog-header></blog-header>
    <div id="blog-container">
      <h1>Blog</h1>
      <h3>抱歉，将尽快提供，请浏览<router-link to="/about">About</router-link></h3>
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
    padding: 8% 0;
  }
</style>

