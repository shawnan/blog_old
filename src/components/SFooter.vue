<template>
  <div class="footer-wrapper">
    <div class="navigation-wrapper">
      <footer>
         <span>© {{startYear}}-{{year}} {{title}}. Designed by  <a href="https://mmistakes.github.io/hpstr-jekyll-theme/" rel="nofollow">Michael Rose</a>.</span>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sfooter',
  data () {
    return {
      startYear: 2016,
      year: new Date().getFullYear(),
      title: '天空之下'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-wrapper {
  margin: 2em auto;
  text-align: center;
  color: rgba(85,85,85,0.8);
}
.footer-wrapper:after {
  clear: both;
}
.footer-wrapper:before,
.footer-wrapper:after {
  display: table;
  content: "";
  line-height: 0;
}
.footer-wrapper a {
  color: rgba(85,85,85,0.8);
}
</style>
