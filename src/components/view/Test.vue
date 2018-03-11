<template>
  <div id="test">
    <ul>
      <li v-for="title in titleList">
        {{ title.title }}
      </li>
    </ul>
    <!-- <img src="../../assets/logo.png"> -->
    <div v-html="markdown"></div>
  </div>
</template>

<script>
var marked = require('marked');
export default {
  data() {
    return {
      titleList: [],
      markdown: marked("万万没想到！就在上个月25号，没错，圣诞节！本人`阿里云`上的云服务器居然会遭遇`勒索病毒`，而且还把我的`mongodb`数据库都删了，并且留下了这样一串信息：\n![勒索信息截图](http://qcdn.hinotos.com/ransom.png)\n\n其实我是打算，到2018年了，是时候总结下2017年吧，于是我才打开这个后台页面，准备好总结自己过去一年的成与败，没想到我居然连登录都没法登录！提示`用户名或密码不正确`，当时的我简直如图所示。。。\n![](http://qcdn.hinotos.com/mengbi.png)\n\n没办法，我当时想到的只是马上连上云服务器的主机看看啥情况了。\n\n把数据库运行起来，查数据，一看！哎哟喂，所有数据库都不在了！但是不可能是我误删了呀，我懒了一段时间都没看呢，然后就去看看log文件了，发现多了一堆东西，其中除了1月1号的之外，最近的就只有12月25日的log文件了。\n\n打开一看，一开始其实我还想无视，因为全是英文。。。但是当我看到`bitcoin`的时候不淡定了，好歹广外毕业，赶紧看完整篇东西（没错，就是第一张图的东西）\n\n我跟你们说，当时我的内心简直是崩溃的。。。\n![](http://qcdn.hinotos.com/neixinbengkui.jpg)\n\n老实说我想起了阿里云给我发过短信说要给自己部署起来的mongodb弄个用户权限，但是我想着反正也没人知道没人会看，所以就给无视掉了。。。应该就是这个原因了吧，所以当时那个后悔啊（之后我跟同学和同事说起这件事，他们也立即反应过来说是用户权限没有设置导致的！）\n\n后悔解决不了问题，我只能冷静下来想办法咯。毕竟是病毒，所以，我格式化了系统盘（毕竟本来没其他重要的东西），然后一切重新开始！\n![](http://qcdn.hinotos.com/baochiweixiao.jpg)\n\n嗯，然后就是开启了漫长的重新部署之路了。在这次重新部署数据库的过程中，出现了不少问题，以至于我每天都在思考当时我是怎么解决这些问题的。由于每天工作繁忙，一整周都在加班，晚上回家的时候脑袋也不好使了，有时候甚至弄到凌晨2点都没个结果，还导致第二天没睡醒然后迟到了。\n\n直到今天才终于重新把mongodb部署起来了（还做了些小改进）。嗯，这个过程中遇到的一些比较杂或者不算大的坑我会发布`笔记`来总结一下，也算是起到一个提醒作用吧。可能不会太全，毕竟我没有碰到一个问题就发布一次笔记（再说数据库都还没整起来，当然发布不了啊）")
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

