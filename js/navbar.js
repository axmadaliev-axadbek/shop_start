var navbar = document.getElementById('nav')

var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
})