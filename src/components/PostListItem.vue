<template>
    <article class="post-list-item">
  			<header>
					<div class="entry-meta">
    				<span class="entry-date date published updated">
    					<time datetime="2013-10-26T00:00:00-04:00">
    						<a href="#">{{ date }}</a>
    					</time>
    				</span>
    				<span class="author vcard">
    					<span class="fn">
    						<a :href="authorAboutLink" :title="authorName">{{ authorName }}</a>
    					</span>
    				</span>
      			<span class="entry-reading-time">
        			<i class="fa fa-clock-o"></i>
							<a :href="commentLink">{{ commentCount }} 条评论</a>
						</span><!-- /.entry-reading-time -->
	    		</div><!-- /.entry-meta -->
      		<h1 class="entry-title">
      			<a :href="link" rel="bookmark" title="Post with a Background Image" itemprop="url">{{ title }}</a>
      		</h1>
  			</header>
  			<div class="entry-content">
  				<div class="hr dotted clearfix">&nbsp;</div>
			    <div class="content" v-html="content"></div>
  			</div>
			<div class="hr clearfix">&nbsp;</div>
		</article>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'sheader',
  components: {
  },
  data () {
    return {
      date: '02/10/2016',
      authorAboutLink: 'http://www.shawnan.net/index.php/about/',
      authorName: 'Shawnan Chen',
      commentLink: 'http://www.shawnan.net/54.html#respond',
      commentCount: 0,
      link: 'http://www.shawnan.net/54.html',
      title: 'nodejs真是极好的',
      subTitle: 'Home',
      content: '<h1 id="nodejs-">nodejs真是极好的</h1><p>距离上次学习MongoDB又过去半个月左右了，这段时间公司一直比较忙，所以博客基本没有什么进展。上次学完MongoDB，发现提交的数据还没有。于是利用bootstrap做了一个发表文章页，然后就没什么进展了。直到今天，才又动手开始想做点什么。<br />今天这一动不要紧，简直像发现了新世界的大门，node真是太好了。</p><h2 id="supervisor-">supervisor自动监听</h2><p>supervisor能够自动监听改动并重启服务，之前我听说过，但是一直没搞，今天终于趁机会把这个东西给搞定了。<br />首先安装：npm install -g supervisor<br />然后启动：supervisor ./bin/www<br />调试模式：supervisor &#8211;debug ./bin/www<br />配置关心的文件后缀：supervisor &#8211;debug &#8211;extensions html,css ./bin/www</p><h2 id="node-inspector-nodejs-">node-inspector调试NodeJS程序</h2><p>node-inspector能够使得在Chrome浏览器下调试NodeJS程序，简直是神器啊，赶紧用起来。 安装：npm install -g node-inspector<br />启动服务：node-inspector &amp;<br />设置端口：node-inspector &amp; -p 8888<br />然后再结合开启了debug模式的supervisor就可以用chrome访问<a href="http://localhost:8080/?ws=localhost:8080&amp;port=5858开开心心的调试啦。">http://localhost:8080/?ws=localhost:8080&amp;port=5858开开心心的调试啦。</a></p><h2 id="sublime-text-jshint">sublime text 的语法检查工具jshint</h2><p>JSHint是Javascript代码验证工具，可以检查你的代码并提供相关的代码改进意见。<br />安装：首先是在Sublime Text中安装两个插件：SublimeLinter 和 Sublimelinter-jshint。<br />然后是在NodeJS中安装jshint： npm install -g jshint<br />再在项目根目录配置一下.jshintrc文件，就直接可以用了。<br />另外，如果Node没有安装在默认位置，在菜单里Tools -&gt; SublimeLinter -&gt; Open User Setting可以修改成实际安装位置。</p>',

    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.root article {
  background-color: #fff;
  box-shadow: 0 0 0 0, 0 6px 12px rgba(34,34,34,0.1);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 20px;
  padding: 25px 15px;
}
.article:before,
.article:after {
  display: table;
  content: "";
  line-height: 0;
}
.entry:after {
    clear: both;
}
@media only screen and (min-width: 48em){
	.root article {
	  padding: 30px;
	}
}
@media only screen and (min-width: 62.5em){
	.root article {
	  margin-bottom: 30px;
	  padding: 50px 80px;
	}
}
header .entry-meta {
  display: none;
}
.entry-meta {
  font-size: 12px;
  font-size: .75rem;
  text-transform: uppercase;
  color: rgba(187,187,187,0.8);
}
@media only screen and (min-width: 48em){
	header .entry-meta {
	  display: block;
	}
}

.entry-meta .entry-reading-time {
  float: right;
}

h1, h2, h3, h4, h5, h6, p, li{
    word-wrap: break-word;
}
a:visited {
    color: rgba(85,85,85,0.8);
}
a {
    text-decoration: none;
    color: rgba(34,34,34,0.8);
}
h1 {
  font-size: 28px;
  font-size: 1.75rem;
  margin-top: 0.83rem;
  margin-bottom: 0.83rem;
}
@media only screen and (min-width: 48em){
	h1 {
    font-size: 32px;
    font-size: 2rem;
	}
}
.entry-content {
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.625;
  margin-bottom: 26px;
  margin-bottom: 1.625rem;
}
</style>
