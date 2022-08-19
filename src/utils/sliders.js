import Swiper, { Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'

export const mainSwiper = new Swiper('.main-slider', {
  modules: [Navigation],
  navigation: {
    nextEl: ".main-slider__next",
    prevEl: ".main-slider__prev",
  },
})
export const categoriesSwiper = new Swiper('.categories-slider', {
  slidesPerView: 4,
  loop: true,
})
export const trendingNew = new Swiper('.trending__new-products-slider', {
  modules: [Navigation],
  slidesPerView: 5,
  navigation: {
    nextEl: ".trending__new-products-next",
    prevEl: ".trending__new-products-prev",
  },
})
export const trendingFeatured = new Swiper('.trending__featured-slider', {
  modules: [Navigation],
  slidesPerView: 5,
  navigation: {
    nextEl: ".trending__featured-next",
    prevEl: ".trending__featured-prev",
  },
})
export const trendingTopSelling = new Swiper('.trending__top-selling-slider', {
  modules: [Navigation],
  slidesPerView: 5,
  navigation: {
    nextEl: ".trending__top-selling-next",
    prevEl: ".trending__top-selling-prev",
  },
})
export const bannersSwiper = new Swiper('.banners__slider', {
  modules: [Navigation],
  slidesPerView: 5,
  navigation: {
    nextEl: ".banners__slider-next",
    prevEl: ".banners__slider-prev",
  },
})
export const specialSwiper = new Swiper('.special__slider', {
  modules: [Navigation],
  slidesPerView: 5,
  navigation: {
    nextEl: ".special__arrow-next",
    prevEl: ".special__arrow-prev",
  },
})
export const newsSwiper = new Swiper('.news__slider', {
  modules: [Navigation],
  slidesPerView: 3,
  navigation: {
    nextEl: ".news__arrow-next",
    prevEl: ".news__arrow-prev",
  },
})
export const instSwiper = new Swiper('.inst__slider', {
  slidesPerView: 5,
  
})
export const initCounters = () => {
  const cardsArray = Array.from(document.querySelectorAll('.card'));
  cardsArray.forEach((item) => {
    const buttonPlus = item.querySelector('.card__counter-plus');
    const buttonMinus = item.querySelector('.card__counter-minus');
    const input = item.querySelector('.card__counter-input');
    buttonPlus.addEventListener('click', () => {
      input.value = Number(input.value) + 1;
    })
    buttonMinus.addEventListener('click', () => {
      if (input.value > 1){
      input.value -=  1;
      }
      else {
        input.value = 1;
      }
    });
  })
}
export const initTrendingSliders = () => {
  const inputsArr = Array.from(document.querySelectorAll('.trending__input'));
  const slidersArray = Array.from(document.querySelectorAll('.trending__slider-wrapper'));
  inputsArr.forEach((item, index) => {
    item.addEventListener('change', () => {
      slidersArray.forEach((item) => {
        item.classList.remove('trending__slider-wrapper_active');
      })
      if (item.checked) {
        slidersArray[index].classList.add('trending__slider-wrapper_active');
      }
    })
  })
}
initTrendingSliders();
initCounters();
