"use strict";
const accordionButtons = document.querySelectorAll(".accordion-button");
const accordionPanels = document.querySelectorAll(".accordion-panel");
// console.log(accordionPanels);

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("click", function () {
    // console.log("clicked");
  });
});
