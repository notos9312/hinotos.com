<template>
  <div id="test">
    <ul>
      <li v-for="title in titleList">
        {{ title.title }}
      </li>
    </ul>
    <img src="../../assets/logo.png">
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleList: []
    }
  },
  mounted: function(){
    this.getContents('all')
  },
  methods: {
    getContents: function(type) {
      var _this = this
      this.$http
        .post(
          "http://hinotos.com:2333/api/getContents",
          { contentType: type },
          { emulateJSON: true }
        )
        .then(
          res => {
            //res
            _this.titleList = res.body
            console.log(_this.titleList)
          },
          err => {
            console.log(err.status)
          }
        );
    },
  }
}
</script>

<style>
  #test {
    background-color: yellow;
    text-align: center;
  }
  @media (min-width:1170px) {
    #ul {
      width: 900px;
    }
  }
  @media (min-width:970px) and (max-width:1169px) {
    #ul {
      width: 700px;
    }
  }
  @media (min-width:768px) and (max-width:969px) {
    #ul {
      width: 500px;
    }
  }
  @media (min-width:320px) and (max-width:767px) {
    #ul {
      width: 100px;
    }
  }
</style>

