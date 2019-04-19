<template>
    <div>
        <button @click="open">打开</button>
        <button @click="close">关闭</button>
    </div>
</template>

<script>
    let options = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: CameraPreview.CAMERA_DIRECTION.BACK,
        toBack: true,
        tapPhoto: true,
        tapFocus: false,
        previewDrag: false
    };
    export default {
        data() {
            return {};
        },
        created() {},
        methods: {
            open() {
                CameraPreview.startCamera(options);
                document.body.style.backgroundColor = "transparent";
            },
            close() {
                document.body.style.backgroundColor = "#fff";
                CameraPreview.stopCamera([
                    res => {
                        alert(res);
                    },
                    err => {
                        alert(err);
                    }
                ]);
            }
        }
    };
</script>

<style lang="less">
    // html,
    // body {
    //     background-color: transparent;
    // }
</style>
