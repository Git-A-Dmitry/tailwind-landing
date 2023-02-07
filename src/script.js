const nav_list = document.querySelector('ul');
const icon = document.querySelector('.menu-icon');
// let blur = document.getElementById('features');
const btn_m = document.querySelector('.btn');
const pop_up = document.querySelector('.popup');

// Toggle Menu
icon.onclick = function toggleMenu() {
  nav_list.classList.add('top-[0px]');
  nav_list.classList.add('opacity-100');
};

nav_list.addEventListener('click', () => {
  nav_list.classList.remove('top-[0px]');
  nav_list.classList.remove('opacity-100');
  icon.name = 'menu';
});

// Pop-up window

// blur.addEventListener('click', () => {
//   blur.classList.toggle('active');
// });

// pop_btn.onclick = function toggleModal() {
//   popup.classList.add('opacity-100');
// };

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

// btn_m.addEventListener('click', () => {
// popup.classList.add('opacity-100');
// popup.classList.add('scale-110');
//   pop_up.target.classList.toggle('active');
// });

// console.log(btn_m);

const toggle = () => {
  // let blur = document.getElementById('blur');
  // blur.classList.toggle('active');

  // let popup = document.getElementById('popup');
  pop_up.classList.toggle('active');
};
