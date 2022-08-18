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