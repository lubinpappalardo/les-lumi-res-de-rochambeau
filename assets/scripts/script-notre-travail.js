window.onscroll = function() {navHide()};

function navHide() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    console.log("scrolled")
    document.getElementById("nav").classList.add("hide");
  } else {
    document.getElementById("nav").classList.remove("hide");
  }
}

function showContent() {
  if (document.getElementById("content").classList.contains("show")) {
    document.getElementById("content").classList.remove("show");
  } else {
    document.getElementById("content").classList.add("show");
  }
}