// content.js

console.log("🎬 Dark Overlay: 拡張機能が正常に注入されました！");

// 1. カーテン（div要素）を生成
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100vw";
overlay.style.height = "100vh";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
overlay.style.zIndex = "99999";
overlay.style.pointerEvents = "none";

// ★【今日の一撃：初期状態】最初はカーテンを非表示（none）にしておきます
overlay.style.display = "none";

// 2. 画面にドッキング
document.body.appendChild(overlay);

// ★【今日の一撃：スイッチ】キーボードの「C」が押されたら切り替える
document.addEventListener("keydown", (event) => {
  // ユーザーが検索ボックスなどに「文字入力」している最中は、スイッチが暴発しないようにスルーする
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA" || event.target.isContentEditable) {
    return;
  }

  // キーボードの「c」または「C」が押された場合
  if (event.key.toLowerCase() === "c") {
    if (overlay.style.display === "none") {
      overlay.style.display = "block"; // カーテンを引く（暗くする）
      console.log("🎬 Dark Overlay: カーテンを引きました [ON]");
    } else {
      overlay.style.display = "none";  // カーテンを開ける（元に戻す）
      console.log("🎬 Dark Overlay: カーテンを開けました [OFF]");
    }
  }
});