window.onscroll = function() {navHide()};

function navHide() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").classList.add("hide");
  } else {
    document.getElementById("nav").classList.remove("hide");
  }
}