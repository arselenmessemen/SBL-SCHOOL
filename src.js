var navlinks = document.getElementById("navlinks");
var btnClose = document.getElementById("btnClose");
var btnOpen = document.getElementById("btnOpen");
var mq = window.screen.availWidth;
btnClose.style.display = "none";
btnOpen.style.display = "none";

addEventListener("resize", function () {
  if (window.screen.availWidth < 700) {
    navlinks.style.display = "none";
    btnClose.style.display = "block";
    btnOpen.style.display = "block";
  } else {
    navlinks.style.display = "block";
    btnClose.style.display = "none";
    btnOpen.style.display = "none";
  }
});

function Open() {
  console.log("OPEN");
  navlinks.style.display = "block";
}

function Close() {
  console.log("Close");
  navlinks.style.display = "none";
}
