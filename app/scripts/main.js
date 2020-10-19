import $ from "jquery";
import "slick-carousel";

import menuToggleListener from "./menu-toggle-listener";
import setScrollListener from "./set-scroll-listener";

$(".section-four .section-four__slider-wrap").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        dots: false,
      },
    },
  ],
});

const navigationButton = document.getElementById("navigation-toggle-btn");
const navigationMenu = document.getElementById("navigation-menu");
const navigationButtonOff = document.getElementById("btn-nav-off");

if (navigationMenu) {
  menuToggleListener(navigationButton, navigationMenu);
  menuToggleListener(navigationButtonOff, navigationMenu);
}

const horizontalMenu = document.getElementById("main-menu");

if (horizontalMenu) {
  setScrollListener(horizontalMenu, "active", 0);
}
