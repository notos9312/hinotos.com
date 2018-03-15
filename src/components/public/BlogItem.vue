<template>
  <li id="blogItem" @click="toContent(titleObj.objectId)">
    <span id="title">{{titleObj.title}}</span>
    <span id="createTime">{{getFullDate(titleObj.createTime)}}</span>
  </li>
</template>

<script>
export default {
  props: ['titleObj'],
  data(){
    return {
      monthMap: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      fullDate: ''
    }
  },
  methods:{
    getFullDate: function(timeStamp){
      var dateObj = new Date(timeStamp);
      return dateObj.getDate()+' '+this.monthMap[dateObj.getMonth()]+' '+dateObj.getFullYear();
    },
    toContent: function(objId){
      this.$router.push({ path: '/content', query: { contentId: this.titleObj.objectId }});
    }
  }
}
</script>

<style scoped>
#blogItem{
  height: 25px;
  padding: 5px;
  margin: 15px 0;
  font-size: 18px;
  /* border-bottom: 1px solid #eee; */
  cursor: pointer;
}
#title{
  float: left;
}
#createTime{
  float: right;
  color: #9ea3a6;
  font-family: Manuale,Source Han Serif SC,Noto Serif CJK SC,Songti SC,serif;
  font-style: italic;
}
/* #blogItem a{
  text-decoration: none;
  color:#333;
}
#blogItem a:hover {
  text-decoration: underline;
}
#blogItem a:visited {
  text-decoration: none;
} */
</style>


