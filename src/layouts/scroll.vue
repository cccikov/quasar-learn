<template>
    <q-layout>
        <q-page-container>
            <q-btn label="切换" @click="change" />
            <q-infinite-scroll ref="xiaoyu" :handler="resfresher">
                <!-- 内容, 在本例中是一些<p>标签 -->
                <p v-for="item in items" class="caption">
                    Lorem ipsum dolor sit amet({{item}})...
                </p>

                <div class="text-center" slot="message">
                    <q-spinner-dots :size="40"></q-spinner-dots>
                </div>
            </q-infinite-scroll>

        </q-page-container>
    </q-layout>
</template>

<script>
    function axios() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                let list = [];
                for (let i = 0; i < 30; i++) {
                    list.push(Math.random());
                }
                resolve(list);
            }, 300);
        });
    }

    export default {
        create() {
            console.log("a页面onresize");
            debugger;
            window.onresize = function() {};
        },
        data() {
            return {
                items: []
            };
        },
        methods: {
            change() {
                this.items = [];
                this.$refs.xiaoyu.reset(); // 将索引重置为0.
                this.$refs.xiaoyu.resume(); // 开始（恢复）工作
                this.$refs.xiaoyu.poll(); // 检查滚动位置并根据需要加载更多内容。
            },
            resfresher(index, done) {
                console.log(index);

                axios().then(list => {
                    this.items = this.items.concat(list);
                    if (index == 3) {
                        done(true); // 全部数据加载好了，停止工作
                    } else {
                        done(); // 不传参数相当于 poll() 检查滚动位置并根据需要加载更多内容。传入true相当于 stop() 无论滚动位置在哪，停止工作。
                    }
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
