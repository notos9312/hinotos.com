<template>
  <div id="blog">
    <blog-header></blog-header>
    <div id="blog-container">
      <h1>Blog</h1>
      <ul id="titlesList">
        <blog-item v-for="title in titleData" :titleObj="title"></blog-item>
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
      filterTitleArray:[
        "5a5108ef3d0471bbf05c8827", //MongoDB安装及配置
        "5a787bc19be7073c15e34e06", //挂载数据盘到Ubuntu服务器
      ],
    }
  },
  mounted: function(){
    this.getContents('all');
  },
  methods: {
    getContents: function(type) {
      var _this = this;
      this.$http.post(
        "http://hinotos.com:2333/api/getContents",
        { contentType: type },
        { emulateJSON: true }
      ).then(
        res => {
            this.titleData = res.body.sort((i,j)=>{return j.createTime - i.createTime}).filter(this.filterTitleObjFunc);
        },
        err => {
          console.log(err.status);
      });
    },
    filterTitleObjFunc: function(titleObj){
      return (this.filterTitleArray.indexOf(titleObj.objectId) == -1);
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


