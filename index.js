const hamburger = document.querySelector("#hamburger");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const menu = document.querySelector("#menu");
const themeToggle = document.querySelector("#theme-toggle");
const moonIcon = document.querySelector("#moon-icon");
const sunIcon = document.querySelector("#sun-icon");
const body = document.querySelector("body");
const hLinks = document.querySelectorAll("#hLink");

// Initialize the correct icon based on current mode
if (body.classList.contains("dark")) {
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
} else {
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
}

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
});
