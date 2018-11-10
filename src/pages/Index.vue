<template>
  <q-page class="index-wrap">
    <div id="wrap">
      <video></video>
    </div>
    <p>打开文件: <input type="file"></p >
    <p>打开相机: <input type="file" accept="image/*" capture="camera"></p >
    <p>打开录音: <input type="file" accept="audio/*" capture="microphone"></p >
    <p>打开录像: <input type="file" accept="video/*" capture="camcorder"></p >
    <img v-if="imageSrc" :src="imageSrc">
    <div class="btn-wrap">
      <q-btn @click="checkCamera" label="判断权限" />
      <q-btn @click="getCamera" label="获取权限" />
      <q-btn @click="getPermission" label="获取权限2" />
      <q-btn @click="captureImage" label="打开相机？" />
    </div>
    <div class="btn-wrap">
      <q-btn @click="requestPermission('CAMERA')" label="CAMERA" />
      <q-btn @click="requestPermission('RECORD_AUDIO')" label="RECORD_AUDIO" />
      <q-btn @click="requestPermission('BATTERY_STATS')" label="BATTERY_STATS" />
      <q-btn @click="requestPermission('INTERNET')" label="INTERNET" />
      <q-btn @click="requestPermission('WRITE_EXTERNAL_STORAGE')" label="WRITE_EXTERNAL_STORAGE" />
      <q-btn @click="requestPermission('READ_EXTERNAL_STORAGE')" label="READ_EXTERNAL_STORAGE" />
      <q-btn @click="requestPermission('ACCESS_NETWORK_STATE')" label="ACCESS_NETWORK_STATE" />
    </div>
    <div class="btn-wrap">
      <q-btn @click="requestAllPermission()" label="获取多个权限" />
    </div>
    <div class="btn-wrap">
      <q-btn @click="scanner" label="扫描二维码" />
      <q-btn @click="openMediaDevices" label="openMediaDevices" />
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
  &>*{
    flex-shrink: 0;
  }
}

.btn-wrap {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-wrap: wrap;

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
    scanner() {},
    // 获取多个权限
    requestAllPermission() {
      var _this = this;
      _this.info("获取权限");
      // cordova-plugin-android-permissions
      let permissions = cordova.plugins.permissions;
      permissions.requestPermissions(
        [
          permissions.CAMERA,
          permissions.RECORD_AUDIO,
          permissions.INTERNET,
          permissions.WRITE_EXTERNAL_STORAGE,
          permissions.READ_EXTERNAL_STORAGE,
          permissions.ACCESS_NETWORK_STATE
        ],
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
        },
        {
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
    },
    openMediaDevices() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("设备不支持navigator.mediaDevices.getUserMedia");
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
            video.src =
              (window.URL && window.URL.createObjectURL(stream)) || stream;
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
    this.$nextTick(function() {
      alert(location.protocol);
    });
  }
};
</script>