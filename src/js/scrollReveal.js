ScrollReveal({
  reset: true,
  distance: "80px",
  delay: 100,
  duration: 1500,
});

function checkWidth() {
  let width = window.matchMedia("(max-width: 480px)");

  if (width.matches) {
    return;
  } else {
    ScrollReveal().reveal(".navBtn", {
      reset: false,
      distance: "120px",
      duration: 1500,
      delay: 200,
      interval: 250,
      origin: "rigth",
    });
  }
}

checkWidth();

ScrollReveal().reveal("#showcaseTitle, #servicesTitle, #contactsTitle", {
  origin: "left",
  distance: "120px",
  reset: false,
});

ScrollReveal().reveal("#showcaseImg", {
  origin: "top",
  duration: 2000,
});

ScrollReveal().reveal(".serviceImg", {
  origin: "bottom",
  duration: 1500,
  interval: 250,
  reset: false,
});

ScrollReveal().reveal(".serviceName", {
  distance: "0",
  opacity: 0,
  interval: 200,
  reset: false,
});

ScrollReveal().reveal(".serviceDescription", {
  distance: "0",
  opacity: 0,
  interval: 200,
  reset: false,
});

ScrollReveal().reveal(".link-text", {
  origin: "left",
  interval: 250,
  reset: false,
});
