<template>
    <q-page padding>
        <p>这里用来测试原生的东西</p>
        <div>
            <h5>document.location</h5>
            <p>{{location}}</p>
        </div>
        <div>
            <h5>$route</h5>
            <p>fullPath: {{$route.fullPath}}</p>
            <p>path: {{$route.path}}</p>
            <p>query: {{$route.query}}</p>
        </div>
    </q-page>
</template>

<script>
    export default {
        data() {
            return {
                location: document.location
            }
        },
        created(){
            console.log(this.$route)
        }
    };
</script>

<style>
</style>
