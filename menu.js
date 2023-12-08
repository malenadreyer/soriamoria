const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

{
  ("icons");
  [
    { src: "/icon-192.png", type: "imange/png", sizes: "192x192" },
    { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
  ];
}
var currentPage = "home"; // Erstat med den aktuelle sideværdi

document.addEventListener("DOMContentLoaded", function () {
  // Fjern "current" klassen fra alle menu punkter
  var menuItems = document.querySelectorAll(".menu a");
  menuItems.forEach(function (item) {
    item.classList.remove("current");
  });

  // Tilføj "current" klassen til det aktuelle menupunkt
  var currentMenuItem = document.querySelector(".menu a[data-page='" + currentPage + "']");
  if (currentMenuItem) {
    currentMenuItem.classList.add("current");
  }
});
