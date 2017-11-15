<template>
  <div>
    <article>
      <h2 :id="title">{{ title }}</h2>
      <ul>
        <li class="entry-title" v-for="item in postList">
          <a :href="item.href" title="Post with a Background Image">{{ item.title }}</a>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'archives-item',
  components: {
  },
  props: {
    itemId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 2016
    },
    postList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

article {
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
	article {
	  padding: 30px;
	}
}
@media only screen and (min-width: 62.5em){
	article {
	  margin-bottom: 30px;
	  padding: 50px 80px;
	}
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

</style>
