<template>
  <div id="about">
    <blog-header></blog-header>
    <div id="about-container">
      <h1>About</h1>
      <div ref="testa" id="aboutContent" class="md-content" v-html="compiledMarkdown"></div>
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
import BlogFooter from "@/components/public/BlogFooter";
export default {
  components: {
    BlogHeader
  },
  mounted: function() {
    // hljs.highlightCode();
    this.getProfile();
  },
  data() {
    return {
      titleList: [],
      text: "",
      markdown: ""
    };
  },
  computed: {
    compiledMarkdown() {
      this.markdown =  marked(this.text || "", {
        sanitize: true
      });
      return this.markdown;
    }
  },
  methods: {
    getProfile: function() {
      var _this = this;
      this.$axios.get("/api/getProfile").then(
        res => {
          var sucData = res.data;
          _this.text = sucData.profile;
        }
      );
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
    }
  }
};
</script>

<style scoped>
#about {
  height: 100%;
}
#about-container {
  padding: 10% 0;
}
</style>
