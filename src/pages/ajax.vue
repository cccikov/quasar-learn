<template>
    <q-page padding>
        <button @click="web">ajax web</button>
        <button @click="cordova">ajax cordova</button>
        <button @click="https">ajax https</button>
        <p v-html="msg"></p>
    </q-page>
</template>

<script>
    export default {
        data(){
            return{
                msg:""
            }
        },
        created() {},
        methods: {
            web() {
                this.msg = ""
                this.$axios({
                    url: "/statics/json/test.json",
                    method: "get"
                }).then(({ data }) => {
                    this.msg = data
                }).catch(err=>{
                    console.log(err.message);
                    this.msg = err.message;
                });
            },
            https() {
                this.msg = ""
                this.$axios({
                    url: "https://cccikov.github.io/cccDemo/echart/map/json/china.json",
                    method: "get"
                }).then(({ data }) => {
                    this.msg = data
                }).catch(err=>{
                    console.log(err.message);
                    this.msg = err.message;
                });
            },
            cordova(){
                this.msg = ""
                this.$axios({
                    url: "../statics/json/test.json",
                    method: "get"
                }).then(({ data }) => {
                    this.msg = data
                }).catch(err=>{
                    this.msg = err.message;
                });
            }
        }
    };
</script>

<style>
</style>
