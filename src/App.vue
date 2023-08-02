<!-- src/App.vue -->

<template>
  <div class="app">
    <!-- ここに他のコンテンツを追加する場合は、その前後にタイマーを配置できます -->
    <router-view ></router-view> <!-- ここにrouter-viewを追加 -->
  </div>
</template>

<script>
export default {

};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
