var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-nav").style.opacity = "1";
  } else {
    document.getElementById("top-nav").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
};
