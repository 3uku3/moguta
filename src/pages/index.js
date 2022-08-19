import 'normalize.css';

import { mainSwiper, categoriesSwiper } from '../utils/sliders';
import { initDropdownMenu } from '../utils/dropdown';
import './index.css';
const faceCare = document.querySelector('.menu__face-care');
const spa = document.querySelector('.menu__spa');
const highlighter = document.querySelector('.menu__highlighter');
const foundation = document.querySelector('.menu__foundation');
const fregrance = document.querySelector('.menu__fregrance');

const buttonCurrency = document.querySelector('.header__currency');
const dropdownCurrency = buttonCurrency.querySelector('.dropdown__container');
const buttonLang = document.querySelector('.header__lang');
const dropdownLang = buttonLang.querySelector('.dropdown__container');

const menu = document.querySelector('.menu');
const buttonCloseMenu = menu.querySelector('.menu__close');
const buttonMenu = document.querySelector('.header__menu-container');

const menuArr = [faceCare, spa, highlighter, foundation, fregrance];
initDropdownMenu(menuArr);

buttonMenu.addEventListener('click', () => {
  menu.classList.add('menu_active');
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
