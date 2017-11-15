<template>
<div id="archives" class="archives" :class="{feature: isHomePage}" @click="onDivClick($event)">
    <snav></snav>
    <sheader
      :isHomePage="isHomePage"
      :subTitle="subTitle"
    ></sheader>
    <div class="main">
      <router-view></router-view>
    </div>
    <sfooter></sfooter>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import snav from '../../components/SNav'
import sheader from '../../components/SHeader'
import postListItem from '../../components/PostListItem'
import sfooter from '../../components/SFooter'
export default {
  name: 'archives',
  components: {
    snav,
    sheader,
    'post-list-item': postListItem,
    sfooter
  },
  data () {
    return {
      isHomePage: false,
      subTitle: ''
    }
  },
  created () {
    console.log(this.$route)
    var str = 'all ' + this.$route.name;
    this.subTitle = str.toUpperCase();
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

<style>
.main {
  margin: 40px 2px 20px 2px;
}
@media only screen and (min-width: 48em) {
  .main {
    margin-left: 20px;
    margin-right: 20px;
  }
}
@media only screen and (min-width: 62.5em) {
  .main {
    max-width: 800px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>