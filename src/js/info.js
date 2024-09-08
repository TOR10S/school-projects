import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Initialize Swiper
const swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: false,  
  effect: 'flip',
  slidesPerView: 1,

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  keyboard: {
    enabled: true,
  },
});