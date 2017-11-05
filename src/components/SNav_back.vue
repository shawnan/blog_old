<template>
  <div id="J_Nav" class="nav">
    <nav id="J_NavMenu" class="dl-menuwrapper" role="navigation">
      <button class="dl-trigger" v-bind:class="{'dl-active': menuopen}" @click="onButtonClick" data-nav="true"></button>
        <ul class="dl-menu dl-menu-toggle" v-bind:class="{'dl-menuopen': menuopen, 'dl-subview': subviewopen}">
          <li v-for="item in list" v-bind:class="{'dl-subviewopen': item.subviewopen}" @click="onItemClick(item, $event)" data-nav="true">
            <a :href="item.href" data-nav="true">{{ item.title }}</a>
            <ul v-if="item.about" class="dl-submenu">
              <li class="dl-back">
                <a href="#" data-nav="true" data-nav-back="true" @click="onBackItemClick(item, $event)">back</a>
              </li>
              <li>
                  <img src="http://www.shawnan.net/wp-content/themes/underTheSky/images/avatar.jpg" alt="Shawnan Chen photo" class="author-photo">
                  <h4>Shawnan Chen</h4>
                  <p>A front-end learner.</p>
              </li>
              <li><a href="/index.php/about/"><span class="btn btn-inverse">Learn More</span></a></li>
              <li>
                  <a href="https://github.com/shawnan"><i class="fa fa-fw fa-github"></i> GitHub</a>
              </li>
            </ul>
            <ul v-if="item.post" class="dl-submenu">
              <li class="dl-back">
                <a href="#" data-nav="true" data-nav-back="true" @click="onBackItemClick(item, $event)">back</a>
              </li>
              <li><a href="index.php/allpost/">All Posts</a></li>
              <li><a href="index.php/alltags/">All Tags</a></li>
            </ul>
          </li>
        </ul><!-- /.dl-menu -->
    </nav><!-- /.dl-menuwrapper -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import {bAlert, bBtn} from 'bootstrap-vue/lib/components'

export default {
  name: 'mynav',
  components: {
    bBtn
  },
  data () {
    return {
      list: [{
        title: 'Home',
        href: ''
      },{
        title: 'About',
        href: '',
        about: true,
        imgSrc: '',
        name: 'Shawnan Chen',
        info: 'A front-end learner.',
        subviewopen: false
      }, {
        title: 'Posts',
        href: '/',
        post: true,
        subviewopen: false
      }, {
        title: 'Theme Setup',
        href: '',
        subviewopen: false
      }],
      subviewopen: false
    }
  },
  computed: mapState([
    
    'menuopen'
  ]),
  methods: {
    onButtonClick(){
      this.$store.commit('updateMenuOpen', true);
      console.log(this.menuopen);
    },
    onItemClick (item, event) {
      if (event){
        event.preventDefault()
      }
      console.log(event.target.getAttribute('data-nav-back'));
      if (event.target.getAttribute('data-nav-back') == 'true'){
        return;
      }
      console.log('onItemClick:' + item.subviewopen);
      item.subviewopen = !item.subviewopen;
      this.subviewopen = item.subviewopen;
    },
    onBackItemClick (item, event) {
      if (event){
        event.preventDefault()
      }
      console.log('onBackItemClick:' + item.subviewopen);
      item.subviewopen = !item.subviewopen;
      this.subviewopen = item.subviewopen;
      this.$store.commit('updateMenuOpen', true);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dl-menuwrapper {
  position: fixed;
  max-width: 175px;
  top: 25px;
  left: 25px;
  width: 100%;
  z-index: 1000;
  display: block;
  text-align: left;
}
.dl-menuwrapper {
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
  -webkit-perspective-origin: 50% 200%;
  -moz-perspective-origin: 50% 200%;
  perspective-origin: 50% 200%;
}
.dl-menuwrapper button {
  top: 0;
  left: 0;
  background: #222;
  border: none;
  width: 48px;
  height: 45px;
  text-indent: -900em;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  outline: none;
  opacity: 0.6;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}
.dl-menuwrapper button.dl-active {
  display: none;
}
.dl-menuwrapper button:hover,
.dl-menuwrapper button.dl-active,
.dl-menuwrapper ul {
  background: #222;
}
.dl-menuwrapper button:after {
  content: '';
  position: absolute;
  width: 68%;
  height: 5px;
  background: #fff;
  top: 10px;
  left: 16%;
  box-shadow: 0 10px 0 #fff, 0 20px 0 #fff;
}
.dl-menuwrapper .dl-menu {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  max-height: 650px;
}

.dl-menuwrapper .dl-menu {
  margin: 0;
  position: absolute;
  width: 100%;
  max-width: 400px;
  overflow-y: auto;
  max-height: 600px;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 12px 24px rgba(0,0,0,0.4);
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  transform: translateY(10px);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}
.dl-menuwrapper .dl-menu.dl-menu-toggle {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.dl-menuwrapper .dl-menu.dl-menuopen {
  opacity: 1;
  pointer-events: auto;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  transform: translateY(0px);
}
.dl-menuwrapper li .dl-submenu {
    display: none;
}
.dl-menuwrapper .dl-submenu {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    box-shadow: 0 12px 24px rgba(0,0,0,0.4);
}
.dl-menuwrapper ul {
  padding: 0;
  list-style: none;
  list-style-type: none;
  list-style-position: initial;
  list-style-image: initial;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.dl-menu li {
  display: none;
}
.dl-menuopen li {
  display: block;
}
.dl-menuwrapper li {
  position: relative;
  text-align: left;
}
.dl-menuwrapper li a {
  display: block;
  position: relative;
  padding: 15px 20px;
  font-size: 14px;
  font-size: .875rem;
  line-height: 20px;
  font-weight: 400;
  color: #fff;
  outline: none;
  text-align: left;
}
.dl-menuwrapper li.dl-back:after,
.dl-menuwrapper li>a:not(:only-child):after {
  position: absolute;
  top: 0;
  line-height: 50px;
  font-family: 'fontawesome';
  color: #fff;
  speak: none;
  -webkit-font-smoothing: antialiased;
  content: "\f105";
}
.dl-menuwrapper li>a:after {
  right: 10px;
  color: rgba(0,0,0,0.15);
}
.dl-menuwrapper li a:hover {
  background: rgba(255,248,213,0.1);
}
.dl-menu.dl-subview{
  animation:MenuAnimOut 0.4s ease;
  animation-iteration-count: 1;
}
@keyframes MenuAnimOut{
  100%{
    transform:translateZ(300px);
    opacity:0
  }
}
@keyframes MenuAnimIn{
  0%{
    -webkit-transform:translateZ(300px);
    opacity:0
  }
  100%{
    -webkit-transform:translateZ(0px);
    opacity:1
  }
}
.dl-menuwrapper>.dl-submenu.dl-animate-in{
  animation: SubMenuAnimIn 0.4s ease
}

.dl-menu.dl-subview li.dl-subviewopen>.dl-submenu {
  animation: MenuAnimIn 0.4s ease;
  animation-iteration-count: 1;
}

@keyframes SubMenuAnimIn{
  0%{
    transform:translateZ(-300px);
    opacity:0
  }
  100%{
    transform:translateZ(0px);
    opacity:1
  }
}
.dl-menuwrapper>.dl-submenu.dl-animate-out{
  -webkit-animation:SubMenuAnimOut 0.4s ease;
  -moz-animation:SubMenuAnimOut 0.4s ease;
  animation:SubMenuAnimOut 0.4s ease
}
@keyframes SubMenuAnimOut{
  0%{
    transform:translateZ(0px);
    opacity:1
  }
  100%{
    transform:translateZ(-300px);
    opacity:0
  }
}

.dl-menu.dl-subview li.dl-subview,
.dl-menu.dl-subview li.dl-subview .dl-submenu,
.dl-menu.dl-subview li.dl-subviewopen,
.dl-menu.dl-subview li.dl-subviewopen>.dl-submenu,
.dl-menu.dl-subview li.dl-subviewopen>.dl-submenu>li {
  display: block;
}
.dl-menu.dl-subview li,
.dl-menu.dl-subview li.dl-subviewopen>a,
.dl-menu.dl-subview li.dl-subview>a {
  display: none;
}
.dl-menu.dl-subview li.dl-subview,
.dl-menu.dl-subview li.dl-subview .dl-submenu,
.dl-menu.dl-subview li.dl-subviewopen,
.dl-menu.dl-subview li.dl-subviewopen>.dl-submenu,
.dl-menu.dl-subview li.dl-subviewopen>.dl-submenu>li {
}
.dl-menu.dl-subview li,
.dl-menu.dl-subview li.dl-subviewopen>a,
.dl-menu.dl-subview li.dl-subview>a {
  display: none;
}
.dl-menuwrapper li.dl-back>a {
  padding-left: 30px;
  background: rgba(0,0,0,0.2);
}
.dl-menuwrapper li.dl-back:after {
  left: 10px;
  color: rgba(212,204,198,0.5);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  transform: rotate(180deg);
}
.dl-menuwrapper li h4 {
  margin: 0;
  padding: 15px 20px 0;
  color: rgba(255,255,255,0.9);
  font-size: 16px;
}
.dl-menuwrapper li p {
  margin: 0;
  padding: 15px 20px;
  font-size: 14px;
  font-size: .875rem;
  color: rgba(255,255,255,0.8);
  font-weight: 300;
}
.btn,
.read-more-header a,
#goog-wm-sb {
    display: inline-block;
    padding: 8px 20px;
    font-size: 14px;
    font-size: .875rem;
    background-color: #222;
    color: #fff;
    border-width: 2px !important;
    border-style: solid !important;
    border-color: #222;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
.dl-menuwrapper .dl-submenu .btn,
.dl-menuwrapper .dl-submenu .read-more-header a,
.read-more-header .dl-menuwrapper .dl-submenu a,
.dl-menuwrapper .dl-submenu #goog-wm-sb {
    margin-bottom: 0;
}
.btn-inverse {
  background-color: #fff;
  color: #222;
  border-color: #fff;
}
.btn-inverse:hover {
    background-color: #222;
    color: #fff;
}

img {
  max-width: 100%;
  width: auto\9;
  height: auto;
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}
a {
  text-decoration: none !important;
  color: rgba(34,34,34,0.8);
}
a:visited {
  color: rgba(85,85,85,0.8);
}
a:hover {
  color: rgba(0,0,0,0.8);
}
a:hover, a:active {
  outline: 0;
}

</style>
