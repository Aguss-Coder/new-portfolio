//Scroll Reveal implement
ScrollReveal({ reset: true });

ScrollReveal().reveal('#home', { duration: 760 });
ScrollReveal().reveal('#about', { duration: 760 });
ScrollReveal().reveal('.btn', { duration: 760 });


// navbar effect
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item')

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

items.forEach ((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item)
})