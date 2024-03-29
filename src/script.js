"use strict";
const accordionButtons = document.querySelectorAll(".accordion-button");
accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("focus", function () {
    accordionButton.setAttribute("aria-expanded", true);
  });
  accordionButton.addEventListener("blur", function () {
    accordionButton.setAttribute("aria-expanded", false);
  });
});
