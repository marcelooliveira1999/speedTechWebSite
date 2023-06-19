const navBtnBars = document.getElementById("navBtnBars");
const navBtnClose = document.getElementById("navBtnClose");
const navBar = document.getElementById("navBar");
const navBtn = document.querySelectorAll(".navBtn");

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
