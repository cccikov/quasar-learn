<template>
    <q-layout>
        <q-page-container>
            <q-infinite-scroll :handler="loadMore">
                <!-- 内容, 在本例中是一些<p>标签 -->
                <p v-for="item in items" class="caption">
                    Lorem ipsum dolor sit amet...
                </p>
                <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
            </q-infinite-scroll>

        </q-page-container>
    </q-layout>
</template>

<script>
    export default {
        data() {
            return {
                items:[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8]
            };
        },
        methods: {
            loadMore(index, done) {}
        }
    };
</script>

<style>
</style>
