const nav = document.querySelector('.fixed-nav');

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) { // Change scroll threshold as needed
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
