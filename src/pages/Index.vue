<template>
  <q-page class="index-wrap">
    <img v-if="imageSrc" :src="imageSrc">
    <div class="btn-wrap">
      <q-btn @click="checkCamera" label="判断权限" />
      <q-btn @click="getCamera" label="获取权限" />
      <q-btn @click="getPermission" label="获取权限2" />
      <q-btn @click="captureImage" label="打开相机？" />
    </div>
    <router-link to="/tabs"> tabs </router-link>
  </q-page>
</template>
<style lang="less">
.index-wrap {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  height: 120px;
}

.btn-wrap {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-wrap: wrap;
  .q-btn{
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
      debugger;

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
    },
    getPermission() {
      var _this = this;

      _this.info("获取权限");

      var Permission = window.plugins.Permission;

      var permission = "android.permission.RECORD_AUDIO";

      Permission.has(
        permission,
        function(results) {
          if (!results[permission]) {
            Permission.request(
              permission,
              function(results) {
                if (result[permission]) {
                  // permission is granted
                  _this.info("获取成功");
                }
              },
              alert
            );
          }
        },
        alert
      );
    },
    // 打开拍照
    captureImage() {
      navigator.camera.getPicture(
        data => {
          // 如果成功
          this.imageSrc = `data:image/jpeg;base64,${data}`;
        },
        () => {
          // 如果失败
        }, {
          // 相机选项
          destinationType: Camera.DestinationType.DATA_URL
        }
      );
    },
    // 弹出通知
    info(str) {
      this.$q.notify({
        message: str,
        timeout: 300,
        position: "center",
        // color:"ccc",//实际就是添加一个 bg-* 的className
        type: "info"
      });
    }
  },
  mounted: function() {
    this.$nextTick(function() {});
  }
};

</script>
