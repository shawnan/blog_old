<template>
  <div class="post" :class="{feature: isHomePage}" @click="onDivClick($event)">
      <snav></snav>
      <sheader
        :isHomePage="isHomePage"
        :title="title"
        :subTitle="subTitle"
      ></sheader>
      <div class="main">
        <article class="hentry"> 
          <div class="entry-content" v-html="content"></div>
          <div class="read-more">
            <div class="read-more-header">
              <a href="https://mmistakes.github.io/hpstr-jekyll-theme/code-highlighting-post/" class="read-more-btn">Read More</a>
            </div><!-- /.read-more-header -->
            <div class="read-more-content">
              <h3>
                <a href="https://mmistakes.github.io/hpstr-jekyll-theme/code-highlighting-post/" title="Syntax Highlighting Post">Syntax Highlighting Post</a>
              </h3>
              <p>
                <span>Demo post displaying the various ways of highlighting code in Markdown. </span>
                <a href="https://mmistakes.github.io/hpstr-jekyll-theme/code-highlighting-post/">Continue reading</a>
              </p>
            </div><!-- /.read-more-content -->
  
            <div class="read-more-list">
              <div class="list-item">
                <h4>
                  <a href="https://mmistakes.github.io/hpstr-jekyll-theme/sample-link-post/" title="Sample Link Post">Sample Link Post</a>
                </h4>
                <span>Published on August 12, 2013</span>
              </div><!-- /.list-item --> 
    
              <div class="list-item">
                <h4>
                  <a href="https://mmistakes.github.io/hpstr-jekyll-theme/video-post/" title="A Post with a Video">A Post with a Video</a>
                </h4>
                <span>Published on June 25, 2013</span>
              </div><!-- /.list-item -->
            </div><!-- /.read-more-list -->
          </div>
        </article>
      </div>
      <sfooter></sfooter>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import snav from '../../components/SNav'
import sheader from '../../components/SHeader'
import sfooter from '../../components/SFooter'
export default {
  name: 'root',
  components: {
    snav,
    sheader,
    sfooter
  },
  data () {
    return {
      isHomePage: false,
      title: '',
      subTitle: '',
      content: ''
    }
  },
  created () {
    if (this.$route.name != 'Index'){
      this.title = 'nodejs真是极好的';
      this.subTitle = '20171116';
      this.content = '<h1 id="nodejs-">nodejs真是极好的</h1><p>距离上次学习MongoDB又过去半个月左右了，这段时间公司一直比较忙，所以博客基本没有什么进展。上次学完MongoDB，发现提交的数据还没有。于是利用bootstrap做了一个发表文章页，然后就没什么进展了。直到今天，才又动手开始想做点什么。<br />今天这一动不要紧，简直像发现了新世界的大门，node真是太好了。</p><h2 id="supervisor-">supervisor自动监听</h2><p>supervisor能够自动监听改动并重启服务，之前我听说过，但是一直没搞，今天终于趁机会把这个东西给搞定了。<br />首先安装：npm install -g supervisor<br />然后启动：supervisor ./bin/www<br />调试模式：supervisor &#8211;debug ./bin/www<br />配置关心的文件后缀：supervisor &#8211;debug &#8211;extensions html,css ./bin/www</p><h2 id="node-inspector-nodejs-">node-inspector调试NodeJS程序</h2><p>node-inspector能够使得在Chrome浏览器下调试NodeJS程序，简直是神器啊，赶紧用起来。 安装：npm install -g node-inspector<br />启动服务：node-inspector &amp;<br />设置端口：node-inspector &amp; -p 8888<br />然后再结合开启了debug模式的supervisor就可以用chrome访问<a href="http://localhost:8080/?ws=localhost:8080&amp;port=5858开开心心的调试啦。">http://localhost:8080/?ws=localhost:8080&amp;port=5858开开心心的调试啦。</a></p><h2 id="sublime-text-jshint">sublime text 的语法检查工具jshint</h2><p>JSHint是Javascript代码验证工具，可以检查你的代码并提供相关的代码改进意见。<br />安装：首先是在Sublime Text中安装两个插件：SublimeLinter 和 Sublimelinter-jshint。<br />然后是在NodeJS中安装jshint： npm install -g jshint<br />再在项目根目录配置一下.jshintrc文件，就直接可以用了。<br />另外，如果Node没有安装在默认位置，在菜单里Tools -&gt; SublimeLinter -&gt; Open User Setting可以修改成实际安装位置。</p>';
    }
  },
  computed: mapState([
    'menuopen'
  ]),
  methods: {
    onDivClick (event){
      this.$store.commit('updateMenuStatus', false);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: rgba(34,34,34,0.8);
}
a:hover,
a:active {
  outline: 0;
}
.entry:before,
.entry:after,
.hentry:before,
.hentry:after {
  display: table;
  content: "";
  line-height: 0;
}

.entry-content {
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.625;
  margin: 40px 2px 20px 2px;
  padding: 10px 15px;
  background-color: #fff;
  box-shadow: 0 0 0 0, 0 6px 12px rgba(0,0,0,0.1);
  border-radius: 3px;
}
.read-more {
  position: relative;
  margin: 40px 2px 20px 2px;
  padding: 40px 15px 25px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(187,187,187,0.1), 0 6px 12px rgba(0,0,0,0.1);
  border-radius: 3px;
  text-align: center;
}
.read-more:after {
    clear: both;
}
.read-more:before,
.read-more:after {
  display: table;
  content: "";
  line-height: 0;
}
.read-more-header {
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  height: 35px;
}

.read-more-header a:visited {
  color: #fff;
}

.read-more-header a {
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 20px;
  font-size: 14px;
  font-size: .875rem;
  background-color: #222;
  color: #fff;
  border-width: 2px !important;
  border-style: solid !important;
  border-color: #222;
  border-radius: 3px;
}

.read-more-header a:hover {
    background-color: #fff;
    color: #222;
}
.read-more-content {
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.625;
  margin-bottom: 26px;
  margin-bottom: 1.625rem;
}
.read-more-content h3 {
  margin: 0;
  font-size: 28px;
  font-size: 1.75rem;
}
.read-more-list {
  border-top: solid 2px rgba(238,238,238,0.8);
}

.list-item {
  width: 100%;
  text-align: left;
}
.list-item h4 {
  font-size: 18px;
  font-size: 1.125rem;
  margin-bottom: 0;
}
.list-item span {
  display: block;
  font-size: 14px;
  font-size: .875rem;
  color: rgba(162,162,162,0.8);
}

@media only screen and (min-width: 48em) {
  .entry-content {
    margin-left: 10px;
    margin-right: 10px;
    padding: 20px 30px;
  }
  .read-more {
    margin: 50px 10px 20px 10px;
    padding: 50px 40px 25px;
  }
  .read-more-content h3 {
    font-size: 36px;
    font-size: 2.25rem;
  }
  .list-item {
    width: 49%;
    float: left;
  }
  .list-item:nth-child(2) {
    text-align: right;
  }
}

@media only screen and (min-width: 62.5em) {
  .entry-content {
    max-width: 800px;
    margin: 50px auto 30px auto;
    padding: 50px 80px;
  }
  .read-more {
    max-width: 800px;
    padding: 50px 80px;
    margin: 60px auto;
  }
}


</style>

