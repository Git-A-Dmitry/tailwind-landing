const nav_list = document.querySelector('ul');
const icon = document.querySelector('.menu-icon');
const btn_m = document.querySelector('.btn');
const pop_up = document.querySelector('.popup');
const faqs = document.querySelectorAll('.faq');

// Toggle Menu
icon.onclick = function toggleMenu() {
  nav_list.classList.add('top-[0px]');
  nav_list.classList.add('opacity-100');
};

nav_list.addEventListener('click', () => {
  nav_list.classList.remove('top-[0px]');
  nav_list.classList.remove('opacity-100');
  // icon.name = 'menu';
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

// Pop-up window
const toggle = () => {
  // blurring.classList.toggle('active');
  pop_up.classList.toggle('active');
};

pop_up.addEventListener('click', () => {
  pop_up.classList.remove('active');
});

// toggle FAQ
faqs.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('active');
  });
});
