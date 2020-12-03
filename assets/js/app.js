function showAccordion(el) {
  let content = el.querySelector(".accordion__content");
  let isActive = el.classList.contains("active");

  resetAccordions();

  el.classList.toggle("active");
  content.classList.toggle("hide");

  if (isActive) {
    resetAccordions();
  }
}

function resetAccordions() {
  let accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    let accordion_content = accordion.querySelector(".accordion__content");
    accordion.classList.contains("active")
      ? (function () {
          accordion.classList.remove("active");
          accordion_content.classList.add("hide");
        })()
      : false;
    // if (accordion.classList.contains("active")) {
    //   accordion.classList.remove("active");
    //   accordion_content.classList.add("hide");
    // }
  });
}
