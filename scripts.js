import Swiper from "swiper/bundle";

// import styles bundle
import "sass";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".mobile__menu__icon");
  const menuWrapper = document.querySelector(".menu__links__wrapper");

  if (menuIcon) {
    // Ensure the element exists
    menuIcon.addEventListener("click", () =>
      menuWrapper.classList.toggle("mobile__menu__hidden")
    );
  }
});
