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

  /**
   * Services Section
   */
  function createServiceNode(serviceInfo) {
    const serviceNode = $("<div></div>");
    serviceNode.attr("class", "col-md-4");
    serviceNode.html(`
      <div class="card mb-2 bg-ow service-hover bc-transparent">
        <div class="card-body">
          <h5 class="card-title">${serviceInfo.title}</h5>
          <br />
          <p class="card-text">
            ${serviceInfo.desc}
          </p>
        </div>
      </div>`);

    return serviceNode;
  }

  // Grab skills section
  const servicesContainer = $("#services-container");

  // Add services to services section
  fetch("../data/services.json")
    .then((res) => res.json())
    .then((servicesData) => {
      for (const service of servicesData) {
        servicesContainer.append(createServiceNode(service)[0]);
      }
    });

  /**
   * Skills section
   */
  // Create cards for each skill
  function createSkillNode(skillInfo) {
    const skillNode = $("<div></div>");
    skillNode.attr(
      "class",
      "card text-center mb-1 col-md-2 m-1 skill-card skill-hover bg-ow"
    );
    skillNode.html(`
    <div class="card-body">
      <div>
        <img class="skill-icon" src="${skillInfo.icons}" alt="${skillInfo.title}"/>
      </div>
      <div class="card-title">${skillInfo.title}</div>
    </div>`);

    return skillNode;
  }

  // Grab skills section
  const skillsContainer = $("#skills-container");

  // Add skills to skills section
  fetch("../data/skills.json")
    .then((res) => res.json())
    .then((skillsData) => {
      for (const skill of skillsData) {
        skillsContainer.append(createSkillNode(skill)[0]);
      }
    });

  /**
   * Study cases section
   */
  function createcaseNode(caseInfo) {
    const caseNode = $("<div></div>");
    caseNode.attr("class", "col-md-4 col-case");
    caseNode.html(`
    <div class="card bg-dark text-white">
    <a href="${caseInfo.url}" target="_blank" class="text-white">
      <img src="${caseInfo.img}" class="card-img card-img-mod" alt="${caseInfo.title}">
      <div class="card-img-overlay">
        <p class="fs-5 card-title text-center show-on-hover">${caseInfo.title}</p>
      </div>
    </a>
  </div>`);

    return caseNode;
  }

  // Grab skills section
  const casesContainer = $("#cases-container");

  // Add cases to cases section
  fetch("../data/cases.json")
    .then((res) => res.json())
    .then((casesData) => {
      for (const caseData of casesData) {
        casesContainer.append(createcaseNode(caseData)[0]);
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
