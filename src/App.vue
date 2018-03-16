<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3d464d;
  margin: 0 auto;
  position: relative;
}
html, body, #app {
  min-height: 100%;
}
html {
  font: 87.5%/1.7778 Open Sans,Source Han Sans SC,Noto Sans CJK SC,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Microsoft Yahei,sans-serif;
}
img {
  max-width: 100%;
}
@media (min-width:700px) {
  #app {
    width: 640px;
  }
}
@media (max-width:699px) {
  #app {
    width: 95%;
  }
}
.md-content {
  margin-top: 10%;
  font-weight: 400;
  line-height: 1.7;
  text-align: left;
  font-size: 16px;
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
}
.md-content blockquote {
  border-left: 4px solid #42b983;
  font-style: italic;
  padding-left: 20px;
  margin: 0;
}
.md-content pre {
  margin-bottom: 20px;
  padding: 15px;
  font-size: 13px;
  word-wrap: normal;
  word-break: break-word!important;
  white-space: pre;
  overflow: auto;
  border-radius: 0;
  background: #f6f6f6;
  color: #657b83;
  -webkit-text-size-adjust: none;
  display: block;
  margin: 0 0 10px;
  line-height: 1.42857;
  border: 1px solid #ccc;
  font-family: Menlo,Monaco,Consolas,Courier New,monospace;
}
.md-content code {
  padding: 2px 4px;
  background-color: #f6f6f6;
  border: none;
  color: #657b83;
  font-size: 12px;
  white-space: pre-wrap;
  border-radius: 4px;
  font-family: Menlo,Monaco,Consolas,Courier New,monospace;
}
.md-content p img {
  margin: 0 auto;
  display: block;
}
.md-content ul {
    list-style-type: square;
}
.md-content li {
  margin-left: -24px;
}
.md-content a{
  text-decoration: none;
  /* #42b983; #3194d0; */
  color: #42b983;
  font-weight: 600;
}
.md-content a:hover {
  text-decoration: underline;
}
.md-content a:visited {
  text-decoration: none;
}
</style>
