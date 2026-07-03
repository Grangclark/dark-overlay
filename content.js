// content.js

console.log("🎬 Dark Overlay: 拡張機能が正常に注入されました！");

// 1. 画面を覆うための黒いカーテン（div要素）を新しく作成
const overlay = document.createElement("div");

// 2. カーテンの見た目をCSSで設定（画面全体を覆う、半透明の黒、クリックをすり抜ける）
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100vw";
overlay.style.height = "100vh";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // ★ 0.7が暗さの度合いです（0.0〜1.0）
overlay.style.zIndex = "99999";                      // ★ 一番手前に表示させるため最大級の数値を指定
overlay.style.pointerEvents = "none";                 // ★ これ重要！カーテンの後ろにあるボタンをクリックできるようにします

// 3. YouTubeの画面（bodyの末尾）にこのカーテンをドッキング！
document.body.appendChild(overlay);

console.log("🎬 Dark Overlay: 黒いカーテンを画面に敷きました。");