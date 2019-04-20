<template>
    <div>
        <p>
            <button @click="requestAllPermission">获取多个权限</button>
            <button @click="checkCamera">判断相机权限 permissions.CAMERA</button>
            <button @click="getCamera">获取相机权限 permissions.CAMERA</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
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
            // 获取多个权限
            requestAllPermission() {
                var _this = this;
                _this.info("获取权限");
                // cordova-plugin-android-permissions
                let permissions = cordova.plugins.permissions;
                permissions.requestPermissions(
                    [permissions.CAMERA, permissions.RECORD_AUDIO, permissions.INTERNET, permissions.WRITE_EXTERNAL_STORAGE, permissions.READ_EXTERNAL_STORAGE, permissions.ACCESS_NETWORK_STATE],
                    function(status) {
                        if (!status.hasPermission) {
                            _this.info("获取失败");
                        } else {
                            _this.info("获取成功");
                        }
                    },
                    function() {
                        _this.info("获取失败");
                    }
                );
            },
            // 获取权限
            requestPermission(permission) {
                var _this = this;
                _this.info("获取权限 " + permission);
                // cordova-plugin-android-permissions
                let permissions = cordova.plugins.permissions;
                permissions.requestPermission(
                    permissions[permission],
                    function(status) {
                        if (!status.hasPermission) {
                            _this.info("获取失败" + permission);
                        } else {
                            _this.info("获取成功" + permission);
                        }
                    },
                    function() {
                        _this.info("获取失败" + permission);
                    }
                );
            },
            // 判断相机权限 permissions.CAMERA
            checkCamera() {
                var _this = this;
                _this.info("检查权限");
                let permissions = cordova.plugins.permissions;

                function checkPermissionCallback(status) {
                    if (!status.hasPermission) {
                        var errorCallback = function() {
                            _this.info("摄像头的权限没有打开");
                        };
                        permissions.requestPermission(
                            permissions.CAMERA,
                            function(status) {
                                if (!status.hasPermission) errorCallback();
                                _this.info("获取权限成功！");
                            },
                            errorCallback
                        );
                    }
                }
            },
            // 获取相机权限
            getCamera() {
                var _this = this;
                _this.info("获取权限");
                let permissions = cordova.plugins.permissions;
                permissions.requestPermission(permissions.CAMERA, success, error);

                function error() {
                    _this.info("获取失败");
                }

                function success(status) {
                    if (!status.hasPermission) {
                        error();
                    } else {
                        _this.info("获取成功");
                    }
                }
            }
        }
    };
</script>

<style>
</style>
