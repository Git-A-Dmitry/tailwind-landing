const nav_list = document.querySelector('ul');
const icon = document.querySelector('.menu-icon');

icon.onclick = function toggleMenu(e) {
  nav_list.classList.add('top-[0px]');
  // nav_list.classList.add('opacity-100');
};

nav_list.addEventListener('click', () => {
  nav_list.classList.remove('top-[0px]');
  // nav_list.classList.remove('opacity-100');
  // icon.name = 'menu';
});
