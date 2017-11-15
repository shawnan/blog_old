<template>
  <div id="J_Header" class="header">
    <div class="image-credit" v-show="isHomePage">Image source: <a href="http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/">dargadgetz</a></div><!-- /.image-credit -->
    <div class="header-image" v-show="isHomePage">
      <img class="img-responsive" :src="src" :alt="title">
    </div><!-- /.entry-image -->
    <div class="header-title" :class="{'header-title-archives': !isHomePage}">
      <div class="header-title-wrap">
        <h1>{{ title }}</h1>
        <h2>{{ subTitle }}</h2>
      </div><!-- /.header-title-wrap -->
    </div><!-- /.header-title -->
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'sheader',
  components: {
  },
  props: {
    isHomePage: {
      type: Boolean,
      default: true
    },
    subTitle: {
      type: String,
      default: 'Home'
    }
  },
  data () {
    return {
      src: './static/images/abstract-5.jpg',
      title: '天空之下'
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
  width: 100%;
  overflow: hidden;
  position: relative;
}
@media only screen and (min-width: 62.5em) {
  .image-credit {
    max-width: 960px;
  }
}
@media only screen and (min-width: 48em) {
  .image-credit {
    max-width: 760px;
  }
}

.image-credit {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  max-width: 440px;
  padding: 10px 15px;
  background-color: rgba(34,34,34,0.5);
  color: #fff;
  font-size: 12px;
  font-size: .75rem;
  text-align: right;
  -webkit-border-top-right-radius: 3px;
  -webkit-border-bottom-right-radius: 0;
  -webkit-border-bottom-left-radius: 0;
  -webkit-border-top-left-radius: 3px;
  -moz-border-radius-topright: 3px;
  -moz-border-radius-bottomright: 0;
  -moz-border-radius-bottomleft: 0;
  -moz-border-radius-topleft: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: 3px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  z-index: 10;
}
.image-credit a {
    color: #fff;
    text-decoration: none;
}
.header-image {
  position: relative;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  min-height: 400px;
  overflow: hidden;
}
.header-image img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 400px;
}
.feature .header-title {
  position: absolute;
  top: 0;
  display: table;
  margin-top: 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.header-title {
  text-align: center;
  margin: 30px 0 0;
}
.header-title-archives {
  margin: 70px 0 0;
}
.feature .header-title .header-title-wrap {
  display: table-cell;
  vertical-align: middle;
  margin: 0 auto;
  text-align: center;
}
.feature .header-title h1 {
  margin: 10px;
  font-weight: 700;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34,34,34,0.6);
}



.header-title h1 {
  margin: 10px 20px;
  font-weight: 700;
  font-size: 32px;
  font-size: 2rem;
  color: rgba(85,85,85,0.8);
}
@media only screen and (min-width: 900px){
  .header-title h1 {
    font-size: 60px;
    font-size: 3.75rem;
  }
}
@media only screen and (min-width: 48em){
  .header-title h1 {
    font-size: 48px;
    font-size: 3rem;
  }
}

@media only screen and (min-width: 48em){
  h1 {
    font-size: 32px;
    font-size: 2rem;
  }
}
.feature .header-title h2 {
  margin: 0;
  color: #fff;
  text-transform: uppercase;
}
.header-title h2 {
  margin: 0;
  font-size: 18px;
  font-size: 1.125rem;
  text-transform: uppercase;
  color: rgba(136,136,136,0.8);
}
@media only screen and (min-width: 48em) {
  .header-title h2 {
    font-size: 24px;
    font-size: 1.5rem;
  }
}

</style>
