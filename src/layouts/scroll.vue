<template>
    <q-layout>
        <q-page-container>
            <q-btn @click="showModel" label="点击打开模态框"></q-btn>

            <div class="section">
                <!-- quasar 滚动区域 -->
                <q-scroll-area style="height:300px">
                    <q-infinite-scroll :handler="resfresher2">
                        <ul>
                            <li v-for="item in areaList">q-scroll-area {{item}}</li>
                        </ul>
                        <div class="text-center" slot="message">
                            <q-spinner-dots :size="40"></q-spinner-dots>
                        </div>
                    </q-infinite-scroll>
                </q-scroll-area>
            </div>

            <div class="section">
                <!-- 自己根据理解，设.scroll 可触发滚动加载更多 -->
                <div class="scroll" style="height:300px">
                    <!-- .scroll 自带 overflow:auto -->
                    <q-infinite-scroll :handler="resfresher3">
                        <ul>
                            <li v-for="item in selfList">self {{item}}</li>
                        </ul>
                        <div class="text-center" slot="message">
                            <q-spinner-dots :size="40"></q-spinner-dots>
                        </div>
                    </q-infinite-scroll>
                </div>
            </div>

            <!-- q-infinite-scroll 要不就根据 浏览器的滚动条来获取scrollTop来判断是否要加载更多数据 -->
            <!-- q-infinite-scroll 要不就根据 .scroll 祖先元素来获取scrollTop来判断是否要加载更多元素（是自己判断出来），如果是自动区域的滚动，要满足有.scroll祖先元素（overflow:auto）以及限制的高度，不然不会出现滚动条，就会以为一直到底而不加载 -->
            <div class="section">
                <!-- 根据页面的滚动条的加载更多 -->
                <q-btn label="切换tab/重置" @click="change"/>
                <q-infinite-scroll ref="scrollList" :handler="resfresher">
                    <!-- 内容, 在本例中是一些<p>标签 -->
                    <p v-for="item in items" class="caption">Lorem ipsum dolor sit amet({{item}})...</p>

                    <div class="text-center" slot="message">
                        <q-spinner-dots :size="40"></q-spinner-dots>
                    </div>
                </q-infinite-scroll>
            </div>
            <!-- 怎么判断需要.scroll的呢，因为q-scroll-area和q-modal-layout都可以用，都带有.scroll -->

            <q-modal position="bottom" v-model="scrollModal">
                <q-modal-layout>
                    <q-toolbar slot="header">
                        <p>头部</p>
                    </q-toolbar>

                    <q-toolbar slot="header">
                        <p>小头部</p>
                    </q-toolbar>

                    <q-toolbar slot="footer">
                        <p>底部</p>
                    </q-toolbar>

                    <div class="section">
                        <!-- modal 滚动区域 -->
                        <q-scroll-area style="height:300px">
                            <q-infinite-scroll ref='modalScroll' :handler="resfresher4">
                                <ul>
                                    <li v-for="item in qModalList">qModalList {{item}}</li>
                                </ul>
                                <div class="text-center" slot="message">
                                    <q-spinner-dots :size="40"></q-spinner-dots>
                                </div>
                            </q-infinite-scroll>
                        </q-scroll-area>
                    </div>
                </q-modal-layout>
            </q-modal>
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
            }, 2000);
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
                items: [],
                areaList: [],
                selfList: [],
                scrollModal: false,
                search: "",
                qModalList: []
            };
        },
        methods: {
            // 显示模态框
            showModel() {
                this.scrollModal = true;
            },

            change() {
                this.items = [];
                this.$refs.scrollList.reset(); // 将索引重置为0.
                this.$refs.scrollList.resume(); // 开始（恢复）工作
                this.$refs.scrollList.poll(); // 检查滚动位置并根据需要加载更多内容。
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
            },

            resfresher2(index, done) {
                console.log(index);
                axios().then(list => {
                    this.areaList = this.areaList.concat(list);
                    done(); // 不传参数相当于 poll() 检查滚动位置并根据需要加载更多内容。传入true相当于 stop() 无论滚动位置在哪，停止工作。
                });
            },
            resfresher3(index, done) {
                console.log(index);
                axios().then(list => {
                    this.selfList = this.selfList.concat(list);
                    done(); // 不传参数相当于 poll() 检查滚动位置并根据需要加载更多内容。传入true相当于 stop() 无论滚动位置在哪，停止工作。
                });
            },
            resfresher4(index, done) {
                console.log(index);
                axios().then(list => {
                    this.qModalList = this.qModalList.concat(list);
                    done(); // 不传参数相当于 poll() 检查滚动位置并根据需要加载更多内容。传入true相当于 stop() 无论滚动位置在哪，停止工作。
                });
            }
        },
        watch: {
            scrollModal(val) {
                if(val){
                    this.$refs.modalScroll.poll();
                }
            }
        }
    };
</script>

<style>
    .caption {
        margin: 50px 0;
    }
    .section {
        padding: 30px;
        margin: 20px;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
    }
</style>
