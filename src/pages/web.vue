<style lang="less" scoped>
    a{
        display: block;
    }
</style>

<template>
    <q-page padding>
        <q-input v-model="text"/>
        <q-btn @click="browser" label="enter"/>
        <a href="http://api.map.baidu.com/direction?origin=latlng:34.264642646862,108.95108518068|name:我家&destination=大雁塔&mode=driving&region=西安&output=html&src=webapp.baidu.openAPIdemo">调起百度PC或Web地图，展示"西安市"从（lat:34.264642646862,lng:108.95108518068 ）"我家"到"大雁塔"的驾车路线。</a>
        <a href="bdapp://map/newsassistant?src=andr.baidu.openAPIdemo">调起出行早晚报页面</a>
        <a href="baidumap://map/show?zoom=18&center=39.989956,116.323066&src=ios.baidu.openAPIdemo">地图主图区</a>
        <a href="bdapp://map/direction?origin=name:对外经贸大学|latlng: 39.98871,116.43234&destination=西直门&coord_type=bd09ll&mode=transit&sy=3 &index=0&target=1&src=andr.baidu.openAPIdemo">公交路线规划</a>
        <a href="https://www.baidu.com">百度</a>
        <a href="tel:17620628256">电话</a>
    </q-page>
</template>

<script>
    export default {
        data() {
            return {
                text: "https://abao.maijju.com/#/"
            };
        },
        methods: {
            browser() {
                location.href = this.text;
            }
        }
    };
</script>

<style>
</style>
