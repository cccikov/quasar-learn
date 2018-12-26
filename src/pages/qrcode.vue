<template>
    <q-page padding>
        <q-btn @click="take">扫描二维码</q-btn>
        <p v-html="msg">123123</p>
    </q-page>
</template>

<script>
    export default {
        data(){
            return{
                msg:""
            }
        },
        methods: {
            take() {
                var _this = this;
                // alert(cordova.plugins.barcodeScanner)
                cordova.plugins.barcodeScanner.scan(
                    function(result) {
                        _this.msg = "二维码地址: " + result.text + " <br>" + "依据: " + result.format + " <br>" + "取消？: " + result.cancelled;
                    },
                    function(error) {
                        alert("Scanning failed: " + error);
                    },
                    {
                        preferFrontCamera: false, // iOS and Android
                        showFlipCameraButton: false, // iOS and Android
                        showTorchButton: false, // iOS and Android
                        torchOn: false, // Android, launch with the torch switched on (if available)
                        saveHistory: false, // Android, save scan history (default false)
                        prompt: "扫描二维码", // Android
                        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                        formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                        orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
                        disableAnimations: false, // iOS
                        disableSuccessBeep: false // iOS and Android
                    }
                );
            }
        }
    };
</script>

<style>
</style>
