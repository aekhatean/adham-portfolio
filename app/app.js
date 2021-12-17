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

  // Create cards for each skill
  function createSkillNode(skillInfo) {
    const skillNode = $("<div></div>");
    skillNode.attr("class", "card text-center");
    skillNode.html(`
    <div class="card-body">
      <div class="card-title">${skillInfo.icons}</div>
      <div class="card-text">${skillInfo.title}</div>
    </div>`);

    return skillNode;
  }

  // Grab skills section
  const skillsContainer = $("#skills-contaier");

  // Add skills to skills section
  fetch("../data/skills.json")
    .then((res) => res.json())
    .then((skillsData) => {
      for (const skill of skillsData) {
        skillsContainer.append(createSkillNode(skill)[0]);
      }
    });

  // Contact Form validation
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
});
