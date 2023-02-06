// Toggle Menu
const nav_list = document.querySelector('ul');
const icon = document.querySelector('.menu-icon');

console.log(icon);

icon.onclick = function toggleMenu() {
  nav_list.classList.add('top-[0px]');
  nav_list.classList.add('opacity-100');
};

nav_list.addEventListener('click', () => {
  nav_list.classList.remove('top-[0px]');
  nav_list.classList.remove('opacity-100');
  icon.name = 'menu';
});

// Lazy loading
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.add('scale-100');
      } else {
        entry.target.classList.remove('opacity-100');
        entry.target.classList.remove('scale-100');
      }
    });
  },
  { rootMargin: '-100px' }
);

const hiddenElements = document.querySelectorAll('.lazy');
hiddenElements.forEach((el) => observer.observe(el));

console.log(hiddenElements);
