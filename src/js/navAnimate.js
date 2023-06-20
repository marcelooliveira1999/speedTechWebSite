const navBtnBars = document.getElementById("navBtnBars");
const navBtnClose = document.getElementById("navBtnClose");
const navBar = document.getElementById("navBar");
const navBtn = document.querySelectorAll(".navBtn");
const linkServicesBtn = document.getElementById("linkServices");
const linkHomeBtn = document.getElementById("linkHome");
const linkContactsBtn = document.getElementById("linkContacts");

navBtnBars.addEventListener("click", () => {
  navBar.style.right = "0";
});

navBtnClose.addEventListener("click", () => {
  navBar.style.right = "-100%";
});

navBtn.forEach((e) => {
  e.addEventListener("click", () => {
    navBar.style.right = "-100%";
  });
});

linkHomeBtn.addEventListener("click", () => {
  scrollTo(0, 0);
});

linkServicesBtn.addEventListener("click", () => {
  let viewportHeight = window.innerHeight;
  let width = window.matchMedia("(max-width: 480px)");
  let positionPx = 0;

  if (width.matches) {
    positionPx = (90 / 100) * viewportHeight;
  } else {
    positionPx = (100 / 100) * viewportHeight;
  }

  scrollTo(0, positionPx);
});

linkContactsBtn.addEventListener("click", () => {
  let viewportHeight = window.innerHeight * 100;

  scrollTo(0, viewportHeight);
});
