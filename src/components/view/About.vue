<template>
  <div id="about">
    <blog-header></blog-header>
    <div id="about-container">
      <h1>About</h1>
      <div id="aboutContent" v-html="compiledMarkdown"></div>
    </div>
    <!-- <blog-footer></blog-footer> -->
  </div>
</template>

<script>
let marked = require("marked");
let hljs = require("highlight.js");
import "highlight.js/styles/default.css";

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
    BlogHeader,
    BlogFooter
  },
  mounted: function() {
    // hljs.highlightCode();
    this.getProfile();
  },
  data() {
    return {
      titleList: [],
      text: ""
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.text || "", {
        sanitize: true
      });
    }
  },
  methods: {
    getProfile: function() {
      var _this = this;
      this.$http.get("http://hinotos.com:2333/api/getProfile").then(
        res => {
          // console.log(res.body);
          var sucData = res.body;
          _this.text = sucData.profile;
        }
      );
    }
  }
};
</script>

<style scoped>
#about {
  height: 100%;
}
#about-container {
  padding: 8% 0;
}
#aboutContent {
  text-align: left;
}
/* #aboutContent p img {
  margin: 0 auto;
  display: block;
} */
</style>

<style>
#aboutContent p img {
  margin: 0 auto;
  display: block;
}
/* #aboutContent p {
  font-size: 18px;
  font-family: Manuale, Source Han Serif SC, Noto Serif CJK SC, Songti SC, serif;
} */
ul {
    list-style-type: square;
}
li {
  margin-left: -24px;
}
a {
  text-decoration: none;
  color: #3d464d;
  cursor: pointer;
}
a:hover {
  color: #42b983;
}
</style>
