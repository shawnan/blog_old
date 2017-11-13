<template>
    <div id="editor" class="postnew-editor">
        <textarea :value="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
        <button @click="submitInfo">保存</button>
    </div>
</template>
<script>
import marked from 'marked'

export default {
    data: function (){
        return {
            input: '# 开始写作吧'
        }
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.input, { sanitize: true })
        }
    },
    methods: {
        update: function(e){
            this.input = e.target.value
        },
        submitInfo: function(){
            this.$http({
                method: 'POST',
                url: 'http://localhost:3000/api/article',
                data: {
                    title: 'title',
                    tags: 'test',
                    hidden: true,
                    excerpt: '124',
                    content: this.input
                }
            }).then(function(res){
                console.log(res);
            });
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

html,
body,
.postnew-editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
}

.postnew-editor {
    height: 500px;
}

.postnew-editor{
    textarea,
    div {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 20px;
        text-align: left;
        border: 1px solid #E6E6E6;
    }
}


textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
}

code {
  color: #f66;
}
</style>
