$(document).ready(function () {
  console.log($("#fullpage"));
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    slidesNavPosition: "bottom",
  });
});
