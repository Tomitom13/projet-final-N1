document
  .querySelector("#Nb_Color")
  .addEventListener("change", displaycolor, false);
window.addEventListener("load", displaycolor, false);

document.querySelector("#Valider").addEventListener("click", saveData, false);

window.addEventListener("load", displayMeuble, false);
document
  .querySelector("#furniture")
  .addEventListener("change", displayMeuble, false);

function displaycolor() {
  var nb = document.querySelector("#Nb_Color").value;

  for (var i = 1; i <= nb; i++) {
    document.getElementById("color" + i).style.display = "inline-block";
    document.getElementById("color_choice_" + i).style.display = "inline-block";
  }
  nb++;
  for (var i = nb; i <= 5; i++) {
    document.getElementById("color" + i).style.display = "none";
    document.getElementById("color_choice_" + i).style.display = "none";
  }
}

function displayMeuble() {
  var tab;
  if (document.getElementById("furniture").value == "all") {
    tab = document.querySelectorAll(".select_furniture");
    for (var i = 0; i < tab.length; i++) {
      tab[i].style.display = "inline-block";
    }
  } else {
    tab = document.querySelectorAll(".select_furniture");
    for (var i = 0; i < tab.length; i++) {
      tab[i].style.display = "none";
    }
    tab = document.querySelectorAll(
      "." + document.getElementById("furniture").value
    );
    for (var i = 0; i < tab.length; i++) {
      tab[i].style.display = "inline-block";
    }
  }
}

function saveData() {
  localStorage.setItem("length", document.querySelector("#length").value);
  localStorage.setItem("width", document.querySelector("#width").value);
  localStorage.setItem("height", document.querySelector("#height").value);

  localStorage.setItem("nbColor", document.querySelector("#Nb_Color").value);
  localStorage.setItem(
    "color1",
    document.querySelector("#color_choice_1").value
  );
  localStorage.setItem(
    "color2",
    document.querySelector("#color_choice_2").value
  );
  localStorage.setItem(
    "color3",
    document.querySelector("#color_choice_3").value
  );
  localStorage.setItem(
    "color4",
    document.querySelector("#color_choice_4").value
  );
  localStorage.setItem(
    "color4",
    document.querySelector("#color_choice_5").value
  );

  for (var i = 1; i <= 3; i++) {
    if (document.querySelector("#bed" + i + "_input").checked == true) {
      localStorage.setItem("bed" + i, 1);
    }
    if (document.querySelector("#table" + i + "_input").checked == true) {
      localStorage.setItem("table" + i, 1);
    }
  }
  for (var i = 1; i <= 3; i++) {
    if (document.querySelector("#ground_cb_" + i).checked == true) {
      localStorage.setItem("ground" + i, 1);
    }
  }
}

var btnlogout = document.querySelector("#logout");
var btnlogin = document.querySelector("#login");
var btnregister = document.querySelector("#register");
NamePerson = localStorage.getItem("NamePerson");
btnlogout.style.display = "none";

btnregister.addEventListener("click", function () {
    localStorage.setItem("NamePerson", "");
    window.location.href = "../HTML/register.html";
});

btnlogin.addEventListener("click", function () {
  NamePerson = localStorage.setItem("NamePerson", "");
    window.location.href = "../HTML/Login.html";
});

btnlogout.addEventListener("click", function () {
   NamePerson = localStorage.setItem("NamePerson", "");
   window.location.href = "../HTML/Accueil.html";
});

if(NamePerson !== ""){
    btnlogin.style.display = "none";
    btnregister.style.display = "none";
    document.querySelector("#name").innerHTML = NamePerson;
    btnlogout.style.display = "inline-block";
    console.log(NamePerson);
}
else{
    btnlogin.style.display = "inline-block";
    btnregister.style.display = "inline-block";
}
