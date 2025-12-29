// セッションストレージからフラグを取得
const isFirstLoad = sessionStorage.getItem('isFirstLoad');
const loadingWrap = document.querySelector('.loadingWrap');
const loading = document.querySelector('.loading');
const contents = document.querySelector('.contents') // コンテンツ要素を取得

// ローディングを停止する関数
 function loadingStop() {
  const loadingWrap = document.getElementById('loadingWrap');

  // 'loadingNone' クラスを追加
  loadingWrap.classList.add('loadingNone');
  
  setTimeout(function() {
    loadingWrap.style.display = 'none';
  }, 1000);
}
  // フラグがない場合（初回アクセス時）
  if (!isFirstLoad) {
    // loadingWrapにIDを付与
    loadingWrap.id = 'loadingWrap';
    // loadingにIDを付与
    loading.id = 'loading';
    // contents.classList.remove('hidden');
    window.addEventListener('load', function() {
  // ローディングを停止
  loadingStop();
  // セッションストレージにフラグを保存
  sessionStorage.setItem('isFirstLoad', true);
    });
  } else {
    // 初回以外の場合、ローディング画面を非表示にする
    loadingWrap.style.display = 'none';
    // contents.classList.remove('hidden');
  }