const nav_list = document.querySelector('ul');
const icon = document.querySelector('.menu-icon');

// function toggleMenu(e) {
//   e.name === 'menu' ? ((e.name = 'close'), nav_list.classList.add('top-[0px]'), nav_list.classList.add('opacity-100')) : ((e.name = 'menu'), nav_list.classList.remove('top-[0px]'), nav_list.classList.remove('opacity-100'));
// }

nav_list.addEventListener('click', () => {
  nav_list.classList.remove('top-[0px]');
  nav_list.classList.remove('opacity-100');
  icon.name = 'menu';
});
