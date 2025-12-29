// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

        //   loopedSlides: slideLength,

// import styles bundle
// import 'swiper/css/bundle';
import 'swiper/css/bundle';



const swiper = new Swiper(".swiper__container", {
    loop: true, // ループ
   
    speed: 2000, // ループの時間
    autoplay: { //自動再生
      delay: 2, // 途切れなくループ
    },
    slidesPerView: 'auto',
    breakpoints: {
      1400: {
        spaceBetween: 48,
      },
      1200: {
        spaceBetween: 32,
      },
      992: {
        spaceBetween: 24,
      },
      576: {
        spaceBetween: 16,
      },
      300: {
        spaceBetween: 16
      }
      
    }
    
  });
  
