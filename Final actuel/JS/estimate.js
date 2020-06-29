//!window.addEventListener("load", clearLocalS(), false);


document
  .querySelector("#Nb_Color")
  .addEventListener("change", displaycolor, false);
window.addEventListener("load", displaycolor, false);
//TODO window.addEventListener("load", saveData, false);

window.addEventListener("load", fillPopup, false);

document.querySelector("#Valider").addEventListener("click", saveData, false);
document.querySelector("#Valider").addEventListener("click", fillPopup, false);

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
    "color5",
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


function clearLocalS(){
  localStorage.removeItem('ground1');
  localStorage.removeItem('ground2');
  localStorage.removeItem('ground3');
  localStorage.removeItem('ground4');
  localStorage.removeItem('ground5');

  localStorage.removeItem('color1');
  localStorage.removeItem('color2');
  localStorage.removeItem('color3');
  localStorage.removeItem('color4');
  localStorage.removeItem('color5');

  localStorage.removeItem('length');
  localStorage.removeItem('width');
  localStorage.removeItem('heigth');

  localStorage.removeItem('table1');
  localStorage.removeItem('table2');
  localStorage.removeItem('table3');

  localStorage.removeItem('bed1');
  localStorage.removeItem('bed2');
  localStorage.removeItem('bed3');
}


function fillPopup(){

  
  if (localStorage.getItem('width') != '' && localStorage.getItem('length') != '' && localStorage.getItem('width') != null && localStorage.getItem('length') != null){
    document.getElementById('resume_length').innerHTML = localStorage.getItem('length');
    document.getElementById('resume_width').innerHTML = localStorage.getItem('width');
    if (localStorage.getItem('height') != null && localStorage.getItem('height') != ''){
      document.getElementById('resume_height').innerHTML = localStorage.getItem('height');
      for (var i = 1; i <= localStorage.getItem('nbColor'); i++){
        document.getElementById('resume_color' + i).style.backgroundColor=localStorage.getItem('color'+i);
      }
      for (var i = 5; i > localStorage.getItem('nbColor'); i--) {
        document.getElementById('resume_color' + i).style.display ='none';
      }
    }
    else{
      document.getElementById('resume_height').innerHTML = '--';
      for (var i = 1; i <= 5; i++) {
        document.getElementById('resume_color' + i).style.display = 'none';
      }
    }
  }
  else{
    document.getElementById('resume_dimensions').style.display='none';
    document.getElementById('resume_divColor').style.display = 'none';
    for(var i=1; i<=5; i++){
      document.getElementById('resume_color'+i).style.display = 'none';
    }
    for (var i = 1; i <= 3; i++) {
      document.getElementById('resume_sol' + i).style.display = 'none';
    }
    document.getElementById('resume_solChoice').style.display = 'none';
  }

  for(var i=1; i<=3; i++){
    if (localStorage.getItem('bed' + i) != null && localStorage.getItem('bed' + i) != ''){
      document.getElementById('resume_image' + i).src = '../image/furnitures/bed'+i;
      document.getElementById('resume_name' + i).innerHTML = '' + i;

    }
    else {
      document.getElementById('resume_meuble' + i).style.display = 'none';

    }



  }





}

