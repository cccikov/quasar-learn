<style lang="less" scoped>
    img {
        max-width: 100%;
    }
</style>

<template>
    <div>
        <p>利用cordova 插件打开相机</p>
        <p>
            <button @click="open">open</button>
        </p>
        <p>
            <img :src="src">
            <!-- img 会丢失 orientation 信息，所以无论手机是横着拍照还是竖着拍照，都是横着显示 -->
            <!-- Exif.js 可以解决，可以获取 orientation  -->
        </p>
        <p>
            <textarea :value="src" cols="30" rows="10"></textarea>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                src: "../statics/img/test.jpg"
            };
        },
        methods: {
            open() {
                var _this = this;
                navigator.camera.getPicture(
                    data => {
                        _this.src = `data:image/jpeg;base64,${data}`;
                    },
                    err => {
                        alert("err " + err);
                    },
                    {
                        destinationType: Camera.DestinationType.DATA_URL
                    }
                );
            }
        }
    };
</script>

<style>
</style>
