const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (scrollY >= 50) {
    header.style.backgroundColor = "#e0e0e0";
  } else if (screenY < 50) {
    header.style.backgroundColor = "#f0f0f0";
  }
});
