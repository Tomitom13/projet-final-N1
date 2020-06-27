localStorage.setItem("admin", "hugohugohugo");

function login() {
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;
  $("#errorLogin").removeClass("visible");

  if (localStorage.getItem(username) === password) {
    if (username === "admin") {
      window.location.href = "../HTML/HTMLAdminProject.html";

      localStorage.setItem("NamePerson", username);
    } else {
      window.location.href = "../HTML/Accueil.html";

      localStorage.setItem("NamePerson", username);
    }
  } else {
    document.querySelector(
      "#errorLogin"
    ).innerHTML = "incorrect username or password !".bold();

    $("#errorLogin").toggleClass("visible");
  }
}

function register() {
  var registerUserName = document.querySelector("#NewUserName");
  var registerUserPassword = document.querySelector("#NewUserPassword");
  $("#errorNom").removeClass("visible");
  $("#errorPassword").removeClass("visible");
  registerUserName.style.borderColor = "";
  registerUserPassword.style.borderColor = "";

  if (localStorage.getItem(registerUserName.value) !== null) {
    document.querySelector(
      "#errorNom"
    ).innerHTML = "That username is alreat in user, please choose another !".bold();

    $("#errorNom").toggleClass("visible");

    registerUserName.style.borderColor = "red";
  } else if (!registerUserName.value) {
    document.querySelector(
      "#errorNom"
    ).innerHTML = "Please enter a username !".bold();

    $("#errorNom").toggleClass("visible");

    registerUserName.style.borderColor = "red";
  } else if (registerUserPassword.value.length < 6) {
    document.querySelector(
      "#errorPassword"
    ).innerHTML = "That is to short, include 6 or more characters !".bold();

    $("#errorPassword").toggleClass("visible");

    registerUserPassword.style.borderColor = "red";
  } else {
    localStorage.setItem(registerUserName.value, registerUserPassword.value);

    alert(
      "welcome " +
        registerUserName.value +
        " we direct you to the connection page !!"
    );

    window.location.href = "Login.html";
  }
}

function deleteStorage() {
  localStorage.clear();
  localStorage.setItem("admin", "hugohugohugo");
  localStorage.setItem("NamePerson", "login | register");
}

function display_eyes() {
  var pass_field = document.querySelector(".pass-key");
  var showBtn = document.querySelector(".show");

  pass_field.addEventListener("input", function () {
    if (showBtn.className === "show") {
      showBtn.className = "fa fa-eye-slash";
    } else if (pass_field.value === "") {
      showBtn.className = "show";
    }
  });

  showBtn.addEventListener("click", function () {
    if (pass_field.type === "password") {
      pass_field.type = "text";
      showBtn.className = "fa fa-eye";
    } else {
      pass_field.type = "password";

      showBtn.className = "fa fa-eye-slash";
    }
  });
}

display_eyes();
