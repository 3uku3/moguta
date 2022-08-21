export const initDropdownMenu = (arr) => {
  const heightArray = [];
  arr.forEach((element, index) => {
    const container = element.querySelector('.menu__item-container');
    const button = element.querySelector('.mdi');
    const dropdown = element.querySelector('.menu__dropdown');
    const animation = element.querySelector('.animation-line');
    heightArray.push(dropdown.offsetHeight);
    dropdown.classList.add('menu__dropdown_hidden');
    button.addEventListener('click', () => {
      arr.forEach((elem) => {
        if (elem !== element) {
          const cont = elem.querySelector('.menu__item-container');
          const animation = elem.querySelector('.animation-line');
          if (cont.classList.contains('menu__item-container_active')) {
            animation.classList.remove('animation-line__left_active');
            cont.classList.remove('menu__item-container_active');
            const dropdown = elem.querySelector('.menu__dropdown').classList.add('menu__dropdown_hidden');
          }
        }
      })
      animation.classList.toggle('animation-line__left_active')
      container.classList.toggle('menu__item-container_active');
      dropdown.classList.toggle('menu__dropdown_hidden');
      dropdown.style.height = heightArray[index] + 'px';
    })
  });
  for (let i = 0; i < 5; i++) {
    arr[i].classList.add('menu__item_mobile');
  }
  window.addEventListener('resize', () => {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu_active');
    menu.style.opasity = '0';
    const dropdowsArray = Array.from(menu.querySelectorAll('.menu__dropdown'));
    dropdowsArray.forEach((element, index) => {
      element.classList.remove('menu__dropdown_hidden');
      heightArray[index] = element.offsetHeight;
      element.classList.add('menu__dropdown_hidden');
    })
    menu.classList.remove('menu_active');
    menu.style.opasity= '';
  })
}

export const initDropdownFooter = () => {
  const itemsArray = Array.from(document.querySelectorAll('.footer__dropdown-container'));
  const heightArray = [];
  itemsArray.forEach((element, index) => {
    const button = element.querySelector('.footer__dropdown-btn');
    const dropdown = element.querySelector('.footer__dropdown-items');
    heightArray.push(dropdown.offsetHeight);
    dropdown.classList.add('footer__dropdown-items_hidden');
    button.addEventListener('click', () => {
      itemsArray.forEach((elem) => {
        if (elem !== element) {
          const btn = elem.querySelector('.footer__dropdown-btn');
          if (btn.classList.contains('footer__dropdown-btn_active')) {
            btn.classList.remove('footer__dropdown-btn_active');
            elem.querySelector('.footer__dropdown-items').classList.add('footer__dropdown-items_hidden');
          }
        }
      })
      button.classList.toggle('footer__dropdown-btn_active');
      dropdown.classList.toggle('footer__dropdown-items_hidden')
      dropdown.style.height = heightArray[index] + 'px';
    })
  })
  document.querySelector('.footer__dropdown').classList.add('footer__dropdown_hidden')
}