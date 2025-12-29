

const modalBtns = document.querySelectorAll("#modalOpen");
const headerSp = document.querySelector('.header-sp');

modalBtns.forEach(function (btn) {
    btn.onclick = function() {
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "block";
        headerSp.style.display = "none"; // ヘッダーを非表示にする
      
    };
});

const closeBtns = document.querySelectorAll("#modalClose");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
    headerSp.style.display = ""; // ヘッダーを再表示する
  };
});

window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
      headerSp.style.display = ""; // ヘッダーを再表示する
    };
  };