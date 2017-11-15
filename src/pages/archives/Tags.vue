<template>
  <div id="tags">
    <archives-item v-for="item in list"
      :key="item.id"
      :year="item.year"
      :postList="item.postList"
    ></archives-item>
  </div>
</template>
<script>
import ArchivesItem from '../../components/ArchivesItem'

export default {
  name: 'hello',
  components: {
    'archives-item': ArchivesItem
  },
  created () {
  },
  data () {
    return {
      list: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
