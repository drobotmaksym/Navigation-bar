const items = document.querySelectorAll('.nav__item');
let activeItem = document.querySelector('.nav__item[active]');

for (let item of items) {
  item.addEventListener('click', () => {
    if (item === activeItem) return;

    activeItem.removeAttribute('active');
    item.setAttribute('active', '');
    activeItem = item;
  });
}