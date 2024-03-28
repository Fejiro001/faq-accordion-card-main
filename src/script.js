"use strict";
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("click", function () {
    console.log("clicked");
  });
});
