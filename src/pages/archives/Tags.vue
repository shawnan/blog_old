<template>
  <div id="tags">
    <ul class="entry-meta inline-list">
      <li>
        <a v-for="item in tagList" class="tag" v-on:click="scrollToElement(item.name)">
          <span class="term">{{ item.name }}</span>
          <span class="count">{{ item.count }}</span>
        </a>
      </li>
    </ul>
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
  created () {
  },
  data () {
    return {
      tagList: [{
        name: 'JavaScript',
        count: 2
      }, {
        name: 'CSS',
        count: 3
      }, {
        name: 'HTML',
        count: 1
      }],
      list: [{
        type: 'tag',
        title: 'JavaScript',
        postList: [{
          title: 'Post with a Background Image',
          href: 'http://shawnan.net'
        }, {
          title: 'Post with a Background Image',
          href: 'http://shawnan.net'
        }]
      }, {
        type: 'tag',
        title: 'CSS',
        postList: [{
          title: 'CSS1',
          href: 'http://shawnan.net'
        }, {
          title: 'CSS2',
          href: 'http://shawnan.net'
        }]
      }]
    }
  },
  methods: {
    scrollToElement: function(id){
      document.getElementById(id).scrollIntoView();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entry-meta {
  font-size: 12px;
  font-size: .75rem;
  text-transform: uppercase;
  color: rgba(187,187,187,0.8);
}
.entry-meta .tag {
    display: inline-block;
    margin: 4px;
    color: #fff;
    border-radius: 3px;
    background-color: rgba(162,162,162,0.8);
}
.entry-meta .tag:hover {
    background-color: rgba(136,136,136,0.8);
}
.entry-meta a {
    color: rgba(187,187,187,0.8);
}
.entry-meta a:hover{
    cursor: pointer;
    color: #FFF;
}
.entry-meta .tag .count {
    background-color: rgba(136,136,136,0.8);
    border-radius: 0 3px 3px 0;
}
.entry-meta .tag span {
    float: left;
    padding: 2px 6px;
}
.inline-list {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
.inline-list li {
  list-style-type: none;
  display: inline;
}
</style>
