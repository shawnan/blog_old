<template>
  <div id="J_Nav" class="nav">
    <div class="navigation-wrapper">
      <a href="#" id="J_NavToggle" class="navigation-mobile-button" aria-hidden="true" @click.stop.prevent="menuControllHandler">
        <i class="fa fa-bars"></i>
        Menu
      </a>
      <nav id="J_NavMenu" class="animated drop navigation" v-bind:class="{'opened': menuopen, 'closed': !menuopen}" role="navigation">
        <ul class="navigation-list">
          <li v-for="item in list" class="navigation-item" v-bind:class="{'navigation-': item.subviewopen}" data-nav="true">
            <router-link :to="item.href">{{ item.title }}</router-link>
          </li>
        </ul><!-- /.dl-menu -->
      </nav><!-- /.dl-menuwrapper -->
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'mynav',
  data () {
    return {
      list: [{
        title: 'Home',
        href: '/'
      }, {
        title: 'Posts',
        href: '/archives/posts'
      },  {
        title: 'Tags',
        href: '/archives/tags'
      }, {
        title: 'Search',
        href: '/'
      }, {
        title: 'About',
        href: '/about'
      }]
    }
  },
  computed: mapState([
    'menuopen'
  ]),
  methods: {
    menuControllHandler () {
      this.$store.commit('updateMenuStatus', !this.menuopen);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
}

.navigation-mobile-button {
  z-index: 20;
  display: block;
  vertical-align: top;
  margin: 0;
  background-color: #000;
  height: 44px;
  line-height: 44px;
  border-radius: 0;
  color: #fff;
  text-decoration: none;
}

.navigation-wrapper {
  text-align: center;
  width: 100%;
}

.navigation-wrapper:after {
  content: "";
  display: table;
  clear: both;
}

.navigation {
  display: none;
  z-index: 5;
}

.navigation.opened {
  display: block;
  max-height: 100%;
}

.navigation ul {
  display: inline-block;
  width: 100%;
  vertical-align: top;
  margin: 0 0 50px;
  padding: 4px 20px;
  background-color: #000;
}

li {
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 12px;
  margin-bottom: .75rem;
}

.navigation li {
  display: block;
  float: left;
  list-style: none;
  text-align: center;
  font-size: 24px;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0;
  text-transform: uppercase;
  color: #fff;
}

.navigation.opened li {
  float: none;
}

.navigation a {
  display: block;
  margin-bottom: 10px;
  padding: 12px 20px;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
}

.navigation li a:hover {
  -webkit-box-shadow: inset 0 0 1px #fff;
  -moz-box-shadow: inset 0 0 1px #fff;
  box-shadow: inset 0 0 1px #fff;
}
.navigation a:hover {
  background-color: #1a1a1a;
}

@media screen and (min-width: 48em) {
  .navigation-mobile-button {
    display: none;
  }

  .navigation {
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
    display: none;
    z-index: 5;
  }

  .navigation.closed {
    display: block;
  }

  .navigation ul {
    width: auto;
    border-radius: 0 0 10px 10px;
  }

  .navigation li {
    font-size: 14px;
    font-size: .875rem;
    line-height: 1.7142857143;
    margin-bottom: 0;
  }

  .navigation.opened li {
    float: left;
  }
  
  .navigation a {
    margin-bottom: 0;
    padding: 6px 10px;
  }
}

</style>
