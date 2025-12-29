// ... 既存のコード ...

// フェードインアニメーション用の関数
function fadeInElement(element, duration = 1000) {
  element.style.opacity = 0;
  element.style.transition = `opacity ${duration}ms`;
  
  // 要素が表示されるまで少し待つ
  setTimeout(() => {
    element.style.opacity = 1;
  }, 100);
}

// ページ読み込み完了時に実行
window.addEventListener('load', () => {
  const fvCopy = document.querySelector('.fv-copy');
  const fvCopyMain = document.querySelector('.fv-copy__main');
  const fvCopySub = document.querySelector('.fv-copy__sub');

  // 要素が存在する場合のみアニメーションを適用
  if (fvCopy) {
    fadeInElement(fvCopy, 4500);
  }
  if (fvCopyMain) {
    setTimeout(() => fadeInElement(fvCopyMain, 1000), 500);
  }
  if (fvCopySub) {
    setTimeout(() => fadeInElement(fvCopySub, 1000), 1000);
  }
});

// ... 既存のコード ...