const corpo = document.querySelector("body");
const list = document.querySelector(".bi-list");
const menu = document.querySelector(".menu");
const img = document.querySelector(".img"); // Certifique-se de que é uma <img>
const images = [
  "assets/fotos/slipknot1.webp",
  "assets/fotos/slipknot2.webp",
  "assets/fotos/slipknot3.jpeg",
];
const imageElement = document.querySelector(".img");

let isMenuOpen = false;

list.addEventListener("click", function () {
  if (isMenuOpen) {
    menu.style.display = "none";
    img.style.display = "inline";
    isMenuOpen = false;
  } else {
    menu.style.display = "inline";
    img.style.display = "none";
    isMenuOpen = true;
  }
});

let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
}

setInterval(changeImage, 5000);
