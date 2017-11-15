<template>
  <div id="post">
    <archives-item v-for="item in list"
      :key="item.id"
      :title="item.title"
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
  data () {
    return {
      list: [{
        id: 1,
        title: '2013',
        postList: [
          {
            title: 'Post with a Background Image',
            href: 'http://shawnan.net'
          }, {
            title: 'Post with a Background Image',
            href: 'http://shawnan.net'
          }
        ]
      }, {
        id: 2,
        title: '2017',
        postList: [{
            title: 'Post with a Background Image',
            href: 'http://shawnan.net'
          }, {
            title: 'Post with a Background Image',
            href: 'http://shawnan.net'
          }, {
            title: 'Post with a Background Image',
            href: 'http://shawnan.net'
          }, {
            title: 'Post with a Background Image',
            href: 'http://shawnan.net'
          }
        ]
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
