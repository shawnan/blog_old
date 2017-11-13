<template>
    <div id="post">
        <div class="hello">
            <h1>{{ msg }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data () {
        return {
            msg: 'post'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
