<template>
    <div id="root">
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
            msg: 'Root'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
