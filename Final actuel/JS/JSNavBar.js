// grabbing the class names from the data attributes
const navBar = $(".navbar"),
  data = navBar.data();

// booleans used to tame the scroll event listening a little..
let scrolling = false,
  scrolledPast = false;

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
}

// transition Into
function switchInto() {
  // update `scrolledPast` bool
  scrolledPast = true;
  // add/remove CSS classes
  navBar.removeClass(data.startcolor);
  navBar.removeClass(data.startsize);
  navBar.addClass(data.intocolor);
  navBar.addClass(data.intosize);
  console.log("into transition triggered!");
}
// transition Start
function switchStart() {
  // update `scrolledPast` bool
  scrolledPast = false;
  // add/remove CSS classes
  navBar.addClass(data.startcolor);
  navBar.addClass(data.startsize);
  navBar.removeClass(data.intocolor);
  navBar.removeClass(data.intosize);
  console.log("start transition triggered!");
}

// set `scrolling` to true when user scrolls
$(window).scroll(() => (scrolling = true));

setInterval(() => {
  // when `scrolling` becomes true...
  if (scrolling) {
    // set it back to false
    scrolling = false;
    // check scroll position
    if ($(window).scrollTop() > 100) {
      // user has scrolled > 100px from top since last check
      if (!scrolledPast) {
        switchInto();
      }
    } else {
      // user has scrolled back <= 100px from top since last check
      if (scrolledPast) {
        switchStart();
      }
    }
  }
  // take a breath.. hold event listener from firing for 100ms
}, 100);

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
    sessionStorage.setItem("Nmode", 1);
  }
}
