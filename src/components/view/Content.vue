<template>
  <div id="blog">
    <blog-header></blog-header>
    <div id="content-container">
      <h1>{{contentObj.title}}</h1>
      <div class="md-content" v-html="compiledMarkdown"></div>
    </div>
    <!-- <blog-footer></blog-footer> -->
  </div>
</template>

<script>
let marked = require("marked");
let hljs = require("highlight.js");
import "highlight.js/styles/atelier-savanna-dark.css";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  }
});

import BlogHeader from "@/components/public/BlogHeader";
export default {
  components: {
    BlogHeader
  },
  mounted: function(){
    this.getTheContent({objectId: this.$route.query.contentId});
  },
  data(){
    return {
      contentObj: {title:'', content:''},
      markdown: '',
      title: ''
    }
  },
  methods: {
    getTheContent: function(data) {
      var _this = this;
      this.$http
        .post("/api/getTheContent", data, {
          emulateJSON: true
        })
        .then(
          res => {
            this.contentObj = res.body;
            this.title = this.contentObj.title;
          },
          err => {
            console.log(err.status);
          }
        );
    }
  },
  computed: {
    compiledMarkdown() {
      this.markdown =  marked(this.contentObj.content || "", {
        sanitize: true
      });
      return this.markdown;
    }
  },
  watch: {
    markdown: function(){
      var links = document.links;
      for(var i=0; i<links.length; i++){
        if(links[i].hostname != window.location.hostname){
          links[i].target = '_blank';
        }
      }
    },
    title: function(){
      document.title = this.title+' · NotFamous, Notos';
    }
  }
}
</script>

<style scoped>
#content-container{
  padding: 10% 0;
}
</style>

