$(document).ready(function () {
  // Create the full page scrolling effect
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    navigation: true,
    paddingTop: "3.5rem",
    navigationTooltips: [
      "Welcome",
      "About me",
      "My services",
      "My skills",
      "Study cases",
      "Contact me",
    ],
  });

  // Create smooth scrolling effect on scroll (Cannot solve it with jQuery *Think of a jQuery solution later*)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
