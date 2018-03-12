<template>
  <div id="about">
    <blog-header></blog-header>
    <div id="about-container">
      <h1>This is About.</h1>
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
#about {
  height: 100%;
}
#about-container {
  height: 600px;
}
</style>

