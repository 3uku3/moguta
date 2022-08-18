export const initDropdownMenu = (arr) => {
  arr.forEach(element => {
    const container = element.querySelector('.menu__item-container');
    const button = element.querySelector('.mdi');
    const dropdown = element.querySelector('.menu__dropdown');
    button.addEventListener('click', () => {
      arr.forEach((elem) => {
        if (elem !== element) {
          const cont = elem.querySelector('.menu__item-container');
          if (cont.classList.contains('menu__item-container_active')) {
            cont.classList.remove('menu__item-container_active');
            elem.querySelector('.menu__dropdown').classList.add('menu__dropdown_hidden');
          }
        }
      })
      container.classList.toggle('menu__item-container_active');
      dropdown.classList.toggle('menu__dropdown_hidden');
    })
  });
}