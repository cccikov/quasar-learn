# Quasar App

在 当前目录 npm i
在 src-cordova 里面也 npm i
在 src-cordova 添加平台 如：cordova platform add android 就会自动下载插件


有些时候要注意 cordova 的android版本，sdk最好下载到最新的版本

cordova-android Version Supported Android API-Levels    Equivalent Android Version
8.X.X   19 - 28 4.4 - 9.0.0
7.X.X   19 - 27 4.4 - 8.1
6.X.X   16 - 26 4.1 - 8.0.0
5.X.X   14 - 23 4.0 - 6.0.1
4.1.X   14 - 22 4.0 - 5.1
4.0.X   10 - 22 2.3.3 - 5.1
3.7.X   10 - 21 2.3.3 - 5.0.2

个人感觉 `cordova platform add android@7` cordova-android 7.x.x版本比较好
* cordova-plugin-camera 在 cordova-android 7.x.x版本 有效；8.x.x无效