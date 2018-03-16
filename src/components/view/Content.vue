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
      contentObj: {title:'', content:''}
    }
  },
  methods: {
    getTheContent: function(data) {
      var _this = this;
      this.$http
        .post("http://hinotos.com:2333/api/getTheContent", data, {
          emulateJSON: true
        })
        .then(
          res => {
            this.contentObj = res.body;
          },
          err => {
            console.log(err.status);
          }
        );
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.contentObj.content || "", {
        sanitize: true
      });
    }
  },
}
</script>

<style scoped>
#content-container{
  padding: 10% 0;
}
</style>

