<template>
    <q-layout>
        <q-page-container>
            <q-infinite-scroll ref="infiniteScroll" :handler="loadMore">
                <!-- 内容, 在本例中是一些<p>标签 -->
                <p v-for="item in items" class="caption">
                    Lorem ipsum dolor sit amet({{item}})...
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
                items: []
            };
        },
        methods: {
            addData() {
                let list = [];
                for (let i = 0; i < 3; i++) {
                    list.push(Math.random());
                }
                return list;
            },
            loadMore(index, done) {
                // this.$refs.infiniteScroll.stop
                console.log(index);
                // console.log(done);
                // if (index > 100) {
                //     done(true);
                // }
                setTimeout(() => {
                    let list = this.addData();
                    this.items = this.items.concat(list);
                    done(); // 不传参数相当于 poll() 检查滚动位置并根据需要加载更多内容。传入true相当于 stop() 无论滚动位置在哪，停止工作。
                });
            }
        }
    };
</script>

<style>
    .caption {
        margin: 50px 0;
    }
</style>
