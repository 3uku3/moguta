export const initDropdownMenu = (arr) => {
  const heightArray = [];
  arr.forEach((element, index) => {
    const container = element.querySelector('.menu__item-container');
    const button = element.querySelector('.mdi');
    const dropdown = element.querySelector('.menu__dropdown');
    heightArray.push(dropdown.offsetHeight);
    dropdown.classList.add('menu__dropdown_hidden');
    button.addEventListener('click', () => {
      arr.forEach((elem) => {
        if (elem !== element) {
          const cont = elem.querySelector('.menu__item-container');
          if (cont.classList.contains('menu__item-container_active')) {
            cont.classList.remove('menu__item-container_active');
            const dropdown = elem.querySelector('.menu__dropdown').classList.add('menu__dropdown_hidden');
          }
        }
      })
      container.classList.toggle('menu__item-container_active');
      dropdown.classList.toggle('menu__dropdown_hidden');
      dropdown.style.height = heightArray[index] + 'px';
    })
  });
}