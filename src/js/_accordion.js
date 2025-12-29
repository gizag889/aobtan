const title = document.querySelectorAll('.jsAccordionTitle');
/* ここでの titleEach => {...} は、.jsAccordionTitle クラスを持つ
すべての要素に対して繰り返し処理を行うためのコールバック関数を定義しています。*/
title.forEach(titleEach => {
    let content = titleEach.nextElementSibling;

    titleEach.addEventListener('click', () => 
    {
    titleEach.classList.toggle('is-active');
    content.classList.toggle('is-open');
    });

});