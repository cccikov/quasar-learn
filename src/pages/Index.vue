<template>
    <q-page class="index-wrap">
        <p>
            <router-link to="/ajax">ajax</router-link>
        </p>
        <p>
            <router-link to="/qrcode">qrcode 扫描二维码</router-link>
        </p>
        <p>
            <router-link to="/qrcode1">直接扫码 {{qrcode}}</router-link>
        </p>
        <p>
            <router-link to="/camera">打开android原生相机，利用cordova</router-link>
        </p>
        <p>
            <router-link to="/tabs">tabs</router-link>
        </p>
        <p>
            <router-link to="/scroll">scroll</router-link>
        </p>
        <p>
            <router-link to="/web">web</router-link>
        </p>
        <p>
            <router-link to="/console">console</router-link>
        </p>
        <p>
            <router-link to="/permission">/permission</router-link>
        </p>
        <p>
            <router-link to="/cordova-plugin-camera-preview">cordova-plugin-camera-preview.vue</router-link>
        </p>
        <p>
            <router-link :to="{path:'/console',query:{name:'ccc',age:'18'}}">{path:'/console',query:{name:'ccc',age:'18'}</router-link>
        </p>
        <p>
            <a href="https://www.baidu.com">外部百度链接</a>
        </p>
        <div id="wrap">
            <video></video>
        </div>
        <p>
            打开文件:
            <input type="file">
        </p>
        <p>
            打开相机:
            <input type="file" accept="image/*" capture="camera">
        </p>
        <p>
            打开录音:
            <input type="file" accept="audio/*" capture="microphone">
        </p>
        <p>
            打开录像:
            <input type="file" accept="video/*" capture="camcorder">
        </p>

        <div class="btn-wrap">
            <q-btn @click="openMediaDevices">原生打开相机js MediaDevices</q-btn>
        </div>
    </q-page>
</template>
<style lang="less">

    .index-wrap {
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        & > * {
            flex-shrink: 0;
        }
        padding: 20px 20px 0;
    }

    .btn-wrap {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        flex-wrap: wrap;
        padding: 0 0 120px;

        .q-btn {
            flex-shrink: 1;
        }
    }

    .bg-ccc {
        background: #000;
    }

    img {
        max-width: 100px;
        max-width: 100px;
    }

    #wrap {
        width: 320px;
        height: 240px;
        margin: 0 auto;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
    }

    #wrap video {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
<script>
    export default {
        name: "PageIndex",
        data: function() {
            return {
                imageSrc: ""
            };
        },
        methods: {
            // 弹出通知
            info(str) {
                this.$q.notify({
                    message: str,
                    timeout: 300,
                    position: "center",
                    // color:"ccc",//实际就是添加一个 bg-* 的className
                    type: "info"
                });
            },
            openMediaDevices() {
                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    alert("设备不支持navigator.mediaDevices.getUserMedia");
                    return;
                }

                if (!navigator.getUserMedia) {
                    alert("设备不支持navigator.getUserMedia");
                }

                let option = {
                    video: {
                        facingMode: { exact: "environment" }
                    } //调用前置摄像头 { 'facingMode': "user" }，后置摄像头使用video: { facingMode: { exact: "environment" } }
                };

                // ！！！ 注意，仅能在https环境下打开
                navigator.mediaDevices
                    .getUserMedia(option)
                    .then(function(stream) {
                        var video = document.querySelector("video");
                        if ("srcObject" in video) {
                            video.srcObject = stream;
                        } else {
                            video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
                        }
                        video.play();
                    })
                    .catch(function(err) {
                        console.error(err);
                        alert(err);
                    });
            }
        },
        mounted: function() {
            this.$nextTick(function() {});
        }
    };
</script>