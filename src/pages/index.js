import 'normalize.css';

import sliders from '../utils/sliders';
import { initDropdownMenu, initDropdownFooter } from '../utils/dropdown';
import './index.css';
const body = document.querySelector('.body');
const headerSticky = document.querySelector('.header__bottom');

const buttonCurrency = document.querySelector('.header__currency');
const dropdownCurrency = buttonCurrency.querySelector('.dropdown__container');
const buttonLang = document.querySelector('.header__lang');
const dropdownLang = buttonLang.querySelector('.dropdown__container');

const menu = document.querySelector('.menu');
const buttonCloseMenu = menu.querySelector('.menu__close');
const buttonMenu = document.querySelector('.header__menu-container');

const buttonAccount = document.querySelector('.header__account');
const buttonSearch = document.querySelector('.header__search');
const buttonCloseSearch = document.querySelector('.search__close');
const searchContainer = document.querySelector('.search');

const menuArray = Array.from(document.querySelectorAll('.menu__item_dropdown'));
const animationFadeInBottomArr = Array.from(document.querySelectorAll('.fade-in-bottom'));

let scrollPos = 0;

initDropdownMenu(menuArray);
initDropdownFooter();
const disableScroll = () => {
  let pagePosition = window.scrollY;
	body.classList.add('body__disable-scroll');
	body.dataset.position = pagePosition;
	body.style.top = -pagePosition + 'px';
}
const enableScroll = () => {
  let pagePosition = parseInt(body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('body__disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	body.removeAttribute('data-position');
}

window.addEventListener('scroll', () => {
  const top = window.pageYOffset;
  if (scrollPos < top) {
    headerSticky.style.top = '-190px'
  }
  else {
    headerSticky.style.top = '0px'
  }
  if (top < 300 && headerSticky.classList.contains('header__sticky')) {
    headerSticky.classList.remove('header__sticky');
    window.scroll(0, top + headerSticky.offsetHeight)
  } else if (top >= 500 && !headerSticky.classList.contains('header__sticky')) {
    window.scroll(0, top - headerSticky.offsetHeight);
    headerSticky.classList.add('header__sticky');
    console.log(top);
    console.log(headerSticky.offsetHeight);
  }
  scrollPos = top
  animationFadeInBottomArr.forEach((element) => {
    if (top > element.offsetTop - 1000) {
      element.classList.add('fade-in-bottom_active');
      element.classList.remove('fade-in-bottom');
    }
  })
  
})
buttonMenu.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
})
buttonCloseMenu.addEventListener('click', () => {
  menu.classList.remove('menu_active');
})

buttonLang.addEventListener('click', () => {
  buttonLang.classList.toggle('dropdown_active');
  dropdownLang.classList.toggle('dropdown__container_hidden');
})

buttonCurrency.addEventListener('click', () => {
  buttonCurrency.classList.toggle('dropdown_active');
  dropdownCurrency.classList.toggle('dropdown__container_hidden');
})
buttonAccount.addEventListener('click', () => {
  buttonAccount.classList.toggle('header__account_active');
})
buttonSearch.addEventListener('click', () => {
  searchContainer.classList.add('search_active');
  disableScroll();
})
buttonCloseSearch.addEventListener('click', () => {
  searchContainer.classList.remove('search_active');
  enableScroll();
})