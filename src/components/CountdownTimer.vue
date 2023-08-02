<template>
    <div class="countdown-timer">
      <div class="timer-text">
        {{ formatTime(timeLeft) }}
      </div>
      <!-- ポップアップの要素 -->
    <transition name="popup-slide">
      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <!-- 画像を背景として表示 -->
          <div class="popup-image-container">
            <img src="/images/caution.jpg" alt="Popup Image" class="popup-image" />
          </div>
          <!-- パスワード入力フォーム -->
          <form @submit.prevent="submitForm" @keyup.enter="submitForm" class="password-form">
            <input
              type="password"
              v-model="password"
              placeholder="テキトーに入力してください"
              class="password-input"
            />
          </form>

        </div>
      </div>
    </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        timer: null,
        timeLeft: 60000, // ミリ秒のカウントダウン時間 (60秒 × 1000ミリ秒)
        showPopup: false, // ポップアップを表示するかどうかのフラグ
        password: '', // 入力されたパスワードを保持するデータ
      };
    },
    mounted() {
      this.startCountdown();
  
      // 5秒後にポップアップを表示
      setTimeout(() => {
        this.showPopup = true;
      }, 5000);
    },
    methods: {
        submitForm() {
    this.$router.push('/submitted'); // ページ遷移
  },
      startCountdown() {
        this.timer = setInterval(() => {
          if (this.timeLeft > 0) {
            this.timeLeft -= 10; // 10ミリ秒ごとに減らす
          } else {
            clearInterval(this.timer);
          }
        }, 10);
      },
      formatTime(milliseconds) {
      const minutes = Math.floor(milliseconds / 60000);
      const seconds = Math.floor((milliseconds % 60000) / 1000);
      const remainingMilliseconds = milliseconds % 1000;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${remainingMilliseconds.toString().padStart(3, '0')}`;
    },
    },
    beforeUnmount() {
      clearInterval(this.timer);
    },
  };
  </script>

<style>
.countdown-timer {
  /* 背景画像の設定 */
  background-image: url('/public/images/worldclock.png'); /* ここに画像ファイルのパスを指定する */
  background-size: cover;
  background-position: center;
  /* 以下はタイマーのスタイルに関するCSS */
  position: relative; /* タイマーの位置を指定 */
  color: grey;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* 画像を画面いっぱいに広げるためのスタイル */
  height: 100%;
  width: 100%;
}

.timer-text {
  font-size: 10em;
  font-weight: bold;
  /* タイマーのテキストを画像の中央に配置 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popup {
  /* ポップアップのスタイル */
  position: fixed;
  top: 0; /* 画面上端に配置 */
  left: 0; /* 画面左端に配置 */
  width: 100%; /* 画面幅いっぱいに広がるように設定 */
  height: 100%; /* 画面高さいっぱいに広がるように設定 */
  background-color: rgba(255, 255, 255, 0.8); /* 透明度を上げる */
  display: flex; /* 画像とフォームを中央に配置するためにFlexboxを使用 */
  justify-content: center;
  align-items: center;
  opacity: 0.95;
}

.popup-content {
  /* ポップアップのコンテンツを中央に配置するためのスタイル */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.popup-image-container {
  /* 画像を背景として表示 */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
}

.popup-image {
  /* 画像を画面の中央に配置 */
  max-width: 100%;
  max-height: 100%;
}

/* パスワード入力フォームのスタイル */
.password-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* フォームを画像の上に配置するためのposition */
  z-index: 1; /* 画像よりも前面に表示するためのz-index */
  width: 80%;
}

.password-input {
  padding: 20px;
  font-size: 2em;
  width: 80%; /* 幅を広げる */
}

.submit-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
