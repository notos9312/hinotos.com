<template>
    <div class="md-content" v-html="compiledMarkdown"></div>
</template>

<script>
  let marked = require('marked');
  let hljs = require('highlight.js');
  import 'highlight.js/styles/default.css';

  marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code, true).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    }
  });

   export default{
    name: 'test',
    computed: {
        compiledMarkdown() {
        let detail = "在这里我记录下MongoDB的下载安装以及启动配置，主要是防止下次再出问题是，我能按照这个步骤来重新部署。因为主要是给自己看的，所以流程上就不那么仔细了\n\n### 1.下载MongoDB\n下载地址：[https://www.mongodb.com/download-center#community](https://www.mongodb.com/download-center#community)\n注意先切换到对应的系统，然后选择对应的系统版本号，再复制下载URL\n\n然后返回系统中用`curl`工具下载，比如写下该笔记时的下载链接是：\n```\ncurl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-3.6.1.tgz\n```\n\n### 2.安装MongoDB\n下载后解压好，并且把解压后的文件夹移动到`/usr/local/`目录下。\nMongoDB 的可执行文件位于 bin 目录下，所以可以将其添加到 PATH 路径中：\n```\nexport PATH=/usr/local/mongodb/bin:$PATH\n```\n\n### 3.初始配置及启动运行\n首先，MongoDB存储的数据是存放在`/data/db/`目录中的，但这个目录在安装的时候不会创建，所以需要手动创建该目录：\n```\nmkdir -p /data/db   # mkdir -p表示迭代创建文件夹\n```\n我这里用配置文件的方式来配置启动MongoDB。先用`vim`工具开始创建、编写配置文件：\n```\nvim /data/db/mongod.cnf\n```\n然后输入以下内容：\n```\ndbpath=/data/db\nlogpath=/data/db/mongodb.log\nlogappend=true\nport=27017\nfork=true\n```\n\n保存退出后，执行以下命令，用读取配置文件的方式启动MongoDB：\n```\n./mongod -f /data/db/mongod.cnf   # -f表示通过配置文件启动\n```\n没有报错就证明启动成功啦~不放心的话用`ps -ef|grep mongod`来查看有没有启动着咯。\n\n### 4.MongoDB后台管理Shell\n进行完第3步，现在已经可以通过本机的客户端来连接数据库了，刚好安装包中提供了一个后台管理shell，启动`mongod`之后，执行以下命令运行即可：\n```\ncd /usr/local/mongodb/bin\n./mongo\n```\n同样，没有明显报错就证明连接数据库成功了，虽然可能会有些WARNING，不过可以忽视。\n\n### 5.设置用户权限\n这里相当重要！\n进入后台管理shell后，先切换到admin数据库：\n```\nuse admin\n```\n然后添加一个用户名为'root'，密码为'root'，权限为'root'的用户（当然本人实际添加的时候密码不是root啦~怎么可能会暴露自己的root用户密码呢）：\n```\ndb.createUser({user:'root', pwd:'root', roles:['root']})\n```\n验证用户：\n```\ndb.auth('root','root')  //第一个参数是用户名，第二个参数是密码\n```\n返回1表示验证成功，0表示验证失败。\n\n然后，以test数据库为例，为test数据库创建一个有读写权限的用户。先切换到test数据库：\n```\nuse test\n```\n然后添加一个用户名为'notos'，密码为'123456'，权限为'readWrite'的用户：\n```\ndb.createUser({user:'notos', pwd:'123456', roles:[{role:'readWrite', db:'test'}]})\n```\n验证用户：\n```\ndb.auth('notos','123456')\n```\n同样地，返回1表示验证成功，0表示验证失败。\n\n### 6.以`auth`的方式重启数据库\n配置文件中没有添加`auth=true`字段，所以即使添加了数据库用户，仍然可以不经过验证去操作数据库。为此，需要修改配置文件后再重启。\n1.退出后台管理shell：\n```\nquit()\n```\n2.停掉mongod（尽量不要用pkill）：\n```\n./mongod --shutdown\n```\n3.修改配置文件：\n```\nvim /data/db/mongod.cnf\n\n#进入编辑模式后，在最底部增加以下字段：\nauth=true\n```\n4.启动mongod：\n```\n./mongod -f /data/db/mongod.cnf\n```\n5.启动后台管理shell：\n```\n./mongo\n```\n此时很多操作都需要用户权限了（比如`show dbs`），如果提示用户权限错误，那就执行`db.auth(username,pwd)`来验证下用户，验证通过即可。\n\n### 7.外部地址连接数据库\n现在这个状态其实只允许本机连接数据库，如果想允许在其他机器连接数据库，则需要修改配置文件，添加一行配置：\n```\nbind_ip:0.0.0.0\n```\n然后重启mongod即可。\n\n### 8.mongoose连接\n顺便提下用mongoose连接带用户权限的数据库：\n```\nmongoose.connect('mongodb://username:password@dbIpAddress:dbPort/dbName', {useMongoClient:true});\n```";
        return marked(detail || '', {
          sanitize: true
        });
      }
    }
   }
</script>


