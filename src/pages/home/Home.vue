<template>
    <div id="home">
        <post-list-item></post-list-item>
    </div>
</template>

<script>
import postListItem from '../../components/PostListItem'
export default {
  name: 'home',
  components: {
    'post-list-item': postListItem,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
