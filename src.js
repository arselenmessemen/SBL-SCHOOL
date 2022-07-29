var navlinks = document.getElementById("navlinks");
var btnClose = document.getElementById("btnClose");
var btnOpen = document.getElementById("btnOpen");
var mq = window.screen.availWidth;
btnClose.style.display = "none";
btnOpen.style.display = "none";
navlinks.style.display = "none";

addEventListener("load", function () {
  if (window.screen.availWidth < 600) {
    navlinks.style.display = "none";
    btnClose.style.display = "none";
    btnOpen.style.display = "block";
  } else {
    navlinks.style.display = "block";
    btnClose.style.display = "none";
    btnOpen.style.display = "none";
  }
});
addEventListener("resize", function () {
  if (window.screen.availWidth < 600) {
    navlinks.style.display = "none";
    btnClose.style.display = "none";
    btnOpen.style.display = "block";
  } else {
    navlinks.style.display = "block";
    btnClose.style.display = "none";
    btnOpen.style.display = "none";
  }
});

function Open() {
  navlinks.style.display = "block";
  btnClose.style.display = "block";
}

function Close() {
  navlinks.style.display = "none";
}
