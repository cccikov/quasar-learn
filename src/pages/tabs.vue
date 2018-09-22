<template>
  <q-page padding>
    <q-tabs v-model="selectedTab">
      <!-- 选项卡 - 注意slot="title" -->
      <q-tab class="bg-black text-red" slot="title" name="test-1" label="3d漫游视频" />
      <q-tab slot="title" name="test-2" label="效果图 " />
      <q-tab slot="title" name="test-3" label="720度全景图 " />
      <!-- 目标 -->
      <q-tab-pane name="test-1"> 选项卡1 </q-tab-pane>
      <q-tab-pane name="test-2"> 选项卡2 </q-tab-pane>
      <q-tab-pane name="test-3"> 选项卡3 </q-tab-pane>
    </q-tabs>
    <q-tabs>
      <!-- 选项卡 - 注意slot="title" -->
      <q-tab default count="5" slot="title" name="tab-1" icon="message" />
      <q-tab disable slot="title" name="tab-2" icon="fingerprint" />
      <q-tab alert slot="title" name="tab-3" icon="account_box" />
      <q-tab slot="title" name="tab-4" icon="accessibility" />
      <q-tab slot="title" name="tab-5" icon="build" />
      <!-- 目标 -->
      <q-tab-pane name="tab-1">Tab One</q-tab-pane>
      <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
      <q-tab-pane name="tab-3">Tab Three</q-tab-pane>
      <q-tab-pane name="tab-4">Tab Four</q-tab-pane>
      <q-tab-pane name="tab-5">Tab Five</q-tab-pane>
    </q-tabs>
  </q-page>
</template>
<script>
export default {
  // name: 'PageName',
  data: () => {
    return {
      selectedTab: "test-2"
    }
  }
}

</script>
<style>


</style>
