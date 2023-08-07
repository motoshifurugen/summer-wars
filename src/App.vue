<template>
  <div class="app">
    <img src="/images/sakuma.png" class="left-top-image" />
    <div class="sakuma-popup-container">
      <div class="sakuma-popup-content">
        <p>{{ popupText }}</p>
      </div>
    </div>
    <router-view :popupText="popupText"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupText: "ここに吹き出しのテキストを追加します。",
    };
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}
.left-top-image {
  position: absolute;
  top: 2em;
  left: 2em;
  width: 200px; /* 画像の幅を適宜調整 */
  z-index: 2;
}
.sakuma-popup-container {
  position: absolute;
  top: 4em;
  left: 450px;
  transform: translateX(-180px);
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 3;
  border: 1px solid grey;
  width: 65%;
}
.sakuma-popup-content {
  text-align: center;
}
</style>
