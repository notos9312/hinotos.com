<template>
  <div id="blog">
    <blog-header></blog-header>
    <div id="blog-container">
      <h1>Blog</h1>
      <ul id="titlesList">
        <blog-item v-for="title in titleData" :titleObj="title" :key="title.objectId"></blog-item>
      </ul>
    </div>
    <!-- <blog-footer></blog-footer> -->
  </div>
</template>

<script>
import BlogHeader from "@/components/public/BlogHeader"
import BlogItem from "@/components/public/BlogItem"
export default {
  components:{
    BlogHeader,
    BlogItem
  },
  data() {
    return {
      titleData: [],
    }
  },
  mounted: function(){
    this.getContents('all');
  },
  methods: {
    getContents: function(type) {
      var _this = this;
      this.$axios.post("/api/getContents", { contentType: type })
      .then(res => {
            this.titleData = res.data.sort((i,j)=>{return j.createTime - i.createTime}).filter(this.filterTitleObjFunc);
        }).catch(err => {
          console.log(err);
      });
    },
    filterTitleObjFunc: function(titleObj){
      return titleObj.bSeen;
    }
  }
}
</script>

<style scoped>
  #blog {
    min-height: 100%;
  }
  #blog-container {
    padding: 10% 0;
  }
  ul,li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  #titlesList {
    margin-top: 10%;
  }
</style>

<style>
h3 a{
  text-decoration: none;
  color:#333;
}
h3 a:hover {
  text-decoration: underline;
  color: #42b983;
}
h3 a:visited {
  text-decoration: none;
}
</style>


