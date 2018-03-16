<template>
  <li id="blogItem" @click="toContent(titleObj.objectId)">
    <span class="title">{{titleObj.title}}</span>
    <span class="createTime">{{getFullDate(titleObj.createTime)}}</span>
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
  /* height: 25px; */
  margin: 10px 0;
  font-size: 18px;
  cursor: pointer;
  /* float: left; */
  width: 100%;
  text-align: left;
}
#blogItem:hover .title{
  color: #42b983;
}
.createTime{
  float: right;
  color: #9ea3a6;
  font-family: Manuale,Source Han Serif SC,Noto Serif CJK SC,Songti SC,serif;
  font-style: italic;
}
@media (min-width:500px) {
  .createTime{
    float: right;
  }
}
@media (max-width:499px) {
  .createTime{
    float: none;
    display: block;
  }
}
</style>

<style>

</style>



