// Swiper 7.4.1
import './vendor/swiper';
// import swiper from './vendor/swiper';

import './vendor/moveto';
import MoveTo from './vendor/moveto';


const moveTo = new MoveTo({
  duration: 1000,
});

const links = document.querySelectorAll('.js-trigger');

links.forEach(function (link) {
  moveTo.registerTrigger(link);
});

new Swiper('.coaches__swiper', {

  // Стрелки
  navigation: {
    nextEl: '.coaches__button-next',
    prevEl: '.coaches__button-prev',
  },

  // Отключаем скрол на ПК
  simulateTouch: false,

  // Бесконечная прокрутка
  loop: true,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      // Колличество слайдов на странице
      slidesPerView: 1,
      // С какого слайда начинать
      initialSlide: 2,
    },
    768: {
      // Колличество слайдов на странице
      slidesPerView: 2,
      // Отступ между слайдами
      spaceBetween: 30,
      // С какого слайда начинать
      initialSlide: 2,
    },
    1200: {
      // Колличество слайдов на странице
      slidesPerView: 3,
      // Отступ между слайдами
      spaceBetween: 40,
      // С какого слайда начинать
      initialSlide: 0,
    },
    1366: {
      // Колличество слайдов на странице
      slidesPerView: 4,
      // Отступ между слайдами
      spaceBetween: 40,
      // С какого слайда начинать
      initialSlide: 0,
    }
  },
});

new Swiper('.reviews__swiper', {

  // Стрелки
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },

  // Отключаем скрол на ПК
  simulateTouch: false,

});
