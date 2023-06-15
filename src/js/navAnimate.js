const navBtnBars = document.getElementById("navBtnBars");
const navBtnClose = document.getElementById("navBtnClose");
const navBar = document.getElementById("navBar");
const navBtn = document.querySelectorAll(".navBtn");

navBtnBars.addEventListener("click", () => {
  navBar.style.top = "0";
});

navBtnClose.addEventListener("click", () => {
  navBar.style.top = "-100vh";
});

navBtn.forEach((e) => {
  e.addEventListener("click", () => {
    navBar.style.top = "-100vh";
  });
});
