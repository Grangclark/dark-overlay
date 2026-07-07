// content.js (完全版・最終形態)

console.log("🎬 Dark Overlay: 拡張機能が正常に注入されました！");

// 1. カーテン（div要素）を生成
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100vw";
overlay.style.height = "100vh";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.85)"; // ★没入感を高めるために少し暗め（0.85）にアップ！
overlay.style.zIndex = "99999";                        // カーテンの重ね順
overlay.style.pointerEvents = "none";
overlay.style.display = "none"; // 初期は非表示

document.body.appendChild(overlay);

// 2. キーボードの「C」が押されたら切り替える
document.addEventListener("keydown", (event) => {
  // 文字入力中は暴発ガード
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA" || event.target.isContentEditable) {
    return;
  }

  if (event.key.toLowerCase() === "c") {
    // 👑【真のターゲット】巨大な箱ではなく、動画プレイヤーを直接包んでいる直近の2つの枠だけを狙い撃ち
    const playerStage = document.getElementById("player-container-outer"); // 通常モード時の外枠
    const moviePlayer = document.getElementById("movie_player");           // プレイヤー本体

    if (overlay.style.display === "none") {
      // 【ONの処理】カーテンを引く
      overlay.style.display = "block";

      // 動画プレイヤーのエリアだけをピンポイントで最前面に引き上げる
      if (playerStage) {
        playerStage.style.position = "relative";
        playerStage.style.zIndex = "100000";
      }
      if (moviePlayer) {
        moviePlayer.style.position = "relative";
        moviePlayer.style.zIndex = "100001";
      }
      console.log("🎬 Dark Overlay: シネマモード [ON]");
    } else {
      // 【OFFの処理】カーテンを開ける
      overlay.style.display = "none";

      // スタイルを綺麗にリセット
      if (playerStage) {
        playerStage.style.zIndex = "";
        playerStage.style.position = "";
      }
      if (moviePlayer) {
        moviePlayer.style.zIndex = "";
      }
      console.log("🎬 Dark Overlay: シネマモード [OFF]");
    }
  }
});