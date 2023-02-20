const items = document.querySelectorAll('.nav__item');
const indicator = document.querySelector('.nav__indicator');
let activeItem = document.querySelector('.nav__item[active]');

for (let i in items) {
  let item = items[i];
  item.addEventListener('click', () => {
    if (item !== activeItem) {
      activeItem.removeAttribute('active');
      item.setAttribute('active', '');
      activeItem = item;
      indicator.style.left = i * 96 + 'px';
    }
  });
}