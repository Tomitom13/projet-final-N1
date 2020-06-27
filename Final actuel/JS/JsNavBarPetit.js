if (sessionStorage.getItem("Nmode") === null) {
  sessionStorage.setItem("Nmode", 1);
}
if (sessionStorage.getItem("Nmode") == 2) {
  $("body").toggleClass("night");
  $(".main-content").toggleClass("night");
  $("section").toggleClass("night");
  $(".navbar").toggleClass("night");
  $("#title").toggleClass("night");
  $(".overlay").toggleClass("night");
  $(".subtitle").toggleClass("night");
  $(".table").toggleClass("night");
  $(".footer").toggleClass("night");
  $(".navbar-brand").toggleClass("night");
  $(".navbar-links").toggleClass("night");
  $(".idk").toggleClass("night");
  $(".button").toggleClass("night");
  $(".job_right").toggleClass("night");
  $(".card-header").toggleClass("night");
  $(".c1").toggleClass("night");
  $(".desc1").toggleClass("night");
  $(".formulaire").toggleClass("night");
  $(".TitleHRe").toggleClass("night");
}

function NightM() {
  if (sessionStorage.getItem("Nmode") == 1) {
    $("body").toggleClass("night");
    $(".main-content").toggleClass("night");
    $("section").toggleClass("night");
    $(".navbar").toggleClass("night");
    $("#title").toggleClass("night");
    $(".overlay").toggleClass("night");
    $(".subtitle").toggleClass("night");
    $(".table").toggleClass("night");
    $(".footer").toggleClass("night");
    $(".navbar-brand").toggleClass("night");
    $(".navbar-links").toggleClass("night");
    $(".idk").toggleClass("night");
    $(".job_right").toggleClass("night");
    $(".button").toggleClass("night");
    $(".card-header").toggleClass("night");
    $(".c1").toggleClass("night");
    $(".desc1").toggleClass("night");
    $(".formulaire").toggleClass("night");
    $(".TitleHR").toggleClass("night");
    sessionStorage.setItem("Nmode", 2);
  } else if (sessionStorage.getItem("Nmode") == 2) {
    $("body").toggleClass("night");
    $(".main-content").toggleClass("night");
    $("section").toggleClass("night");
    $(".navbar").toggleClass("night");
    $("#title").toggleClass("night");
    $(".overlay").toggleClass("night");
    $(".subtitle").toggleClass("night");
    $(".table").toggleClass("night");
    $(".footer").toggleClass("night");
    $(".navbar-brand").toggleClass("night");
    $(".navbar-links").toggleClass("night");
    $(".idk").toggleClass("night");
    $(".job_right").toggleClass("night");
    $(".button").toggleClass("night");
    $(".card-header").toggleClass("night");
    $(".c1").toggleClass("night");
    $(".desc1").toggleClass("night");
    $(".formulaire").toggleClass("night");
    $(".TitleHR").toggleClass("night");
    sessionStorage.setItem("Nmode", 1);
  }
}