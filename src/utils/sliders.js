import Swiper, { Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'

export const mainSwiper = new Swiper('.main-slider', {
  modules: [Navigation],
  navigation: {
    nextEl: ".main-slider__next",
    prevEl: ".main-slider__prev",
  },
  slideActiveClass: 'fade-in-left'
})
export const categoriesSwiper = new Swiper('.categories__slider', {
  slidesPerView: 1,
  loop: true,
  watchSlidesProgress: true,
  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    479: {
      slidesPerView: 2,
    }
  }
})
export const categoriesBonusesSwiper = new Swiper('.categories__bonuses', {
  slidesPerView: 1,
  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    479: {
      slidesPerView: 2,
    }
  }
})
export const trendingNew = new Swiper('.trending__new-products-slider', {
  modules: [Navigation],
  slidesPerView: 1,
  breakpoints: {
    1399: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 4,
    },
    699: {
      slidesPerView: 3,
    },
    313: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: ".trending__new-products-next",
    prevEl: ".trending__new-products-prev",
  },
})
export const trendingFeatured = new Swiper('.trending__featured-slider', {
  modules: [Navigation],
  slidesPerView: 5,
  breakpoints: {
    1399: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 4,
    },
    699: {
      slidesPerView: 3,
    },
    313: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: ".trending__featured-next",
    prevEl: ".trending__featured-prev",
  },
})
export const trendingTopSelling = new Swiper('.trending__top-selling-slider', {
  modules: [Navigation],
  slidesPerView: 5,
  breakpoints: {
    1399: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 4,
    },
    699: {
      slidesPerView: 3,
    },
    313: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: ".trending__top-selling-next",
    prevEl: ".trending__top-selling-prev",
  },
})
export const bannersSwiper = new Swiper('.banners__slider', {
  modules: [Navigation],
  slidesPerView: 2,
  breakpoints: {
    1199: {
      slidesPerView: 5,
    },
    990: {
      slidesPerView: 4,
    },
    543: {
      slidesPerView: 3,
    },

  },
  navigation: {
    nextEl: ".banners__slider-next",
    prevEl: ".banners__slider-prev",
  },
})
export const specialSwiper = new Swiper('.special__slider', {
  modules: [Navigation],
  slidesPerView: 1,
  breakpoints: {
    1399: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 4,
    },
    699: {
      slidesPerView: 3,
    },
    313: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: ".special__arrow-next",
    prevEl: ".special__arrow-prev",
  },
})
export const newsSwiper = new Swiper('.news__slider', {
  modules: [Navigation],
  slidesPerView: 1,
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    542: {
      slidesPerView: 2,
    }, 
  },
  navigation: {
    nextEl: ".news__arrow-next",
    prevEl: ".news__arrow-prev",
  },
})
export const instSwiper = new Swiper('.inst__slider', {
  slidesPerView: 1,
  breakpoints: {
    1299: {
      slidesPerView: 5,
    },
    991: {
      slidesPerView: 4,
    },
    599: {
      slidesPerView: 3,
    },
    314: {
      slidesPerView: 2,
    },
  },
})
const initCounters = () => {
  const cardsArray = Array.from(document.querySelectorAll('.card'));
  cardsArray.forEach((item) => {
    const buttonPlus = item.querySelector('.card__counter-plus');
    const buttonMinus = item.querySelector('.card__counter-minus');
    const input = item.querySelector('.card__counter-input');
    buttonPlus.addEventListener('click', () => {
      input.value = Number(input.value) + 1;
    })
    buttonMinus.addEventListener('click', () => {
      if (input.value > 1) {
        input.value -= 1;
      }
      else {
        input.value = 1;
      }
    });
  })
}
const initTrendingSliders = () => {
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
