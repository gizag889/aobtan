document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('js-hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleHamburgerMenu);
  }

  const menuLinks = document.querySelectorAll('#js-global-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleHamburgerMenu);
  });

  function toggleHamburgerMenu() {
    document.body.classList.toggle('is-drawerActive');

    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    
    if (!isExpanded) {
      hamburger.setAttribute('aria-expanded', 'true');
      document.getElementById('js-global-menu').style.visibility = 'visible';
      document.getElementById('js-global-menu').setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    } else {
      hamburger.setAttribute('aria-expanded', 'false');
      document.getElementById('js-global-menu').style.visibility = 'hidden';
      document.getElementById('js-global-menu').setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; 
    }
  }
  // 追従ヘッダー
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-sp');
    const headerHeight = document.querySelector(".header-sp").offsetHeight; // ヘッダーの高さを取得
    const scrollY = window.pageYOffset;
    
    if (scrollY >= 20) {
      header.classList.add('header--sticky');
      document.body.style.marginTop = headerHeight + 'px'; // コンテンツにヘッダーの高さ分の余白を設定
    } else {
      header.classList.remove('header--sticky');
      document.body.style.marginTop = '0'; // コンテンツの余白をリセット
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // href属性が"#"で始まるaタグのクリックイベント
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const href = this.getAttribute("href");
      const targetId = href === "#" || href === "" ? 'html' : href;
      const targetElement = document.querySelector(targetId);
      const position = targetElement ? targetElement.offsetTop : 0;
      
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });
});