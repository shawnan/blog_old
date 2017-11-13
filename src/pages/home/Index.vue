<template>
  <div id="root" class="root" :class="{feature: isHomePage}" @click="onDivClick($event)">
      <snav></snav>
      <sheader></sheader>
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
  name: 'root',
  components: {
    snav,
    sheader,
    'post-list-item': postListItem,
    sfooter
  },
  data () {
      return {
          msg: 'Root',
          isHomePage: true
      }
  },
  created () {
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
.root {
  width: 100%;
  height: 100%;
}
</style>

