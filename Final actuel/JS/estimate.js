//window.addEventListener("load", clearLocalS(), false);





document
  .querySelector("#Nb_Color")
  .addEventListener("change", displaycolor, false);
window.addEventListener("load", displaycolor, false);
//TODO window.addEventListener("load", saveData, false);

window.addEventListener("load", fillPopup, false);

document.querySelector("#Valider").addEventListener("click", saveData, false);
//document.querySelector("#Valider").addEventListener("click", fillPopup, false);

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
  clearLocalS();
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

  fillPopup();

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
  var prix = 0;
  document.getElementById('resume_nbColor').innerHTML = ' ' + localStorage.getItem('nbColor') + ' ';

  
  if (localStorage.getItem('width') != '' && localStorage.getItem('length') != '' && localStorage.getItem('width') != null && localStorage.getItem('length') != null){
    document.getElementById('resume_length').innerHTML = localStorage.getItem('length');
    document.getElementById('resume_width').innerHTML = localStorage.getItem('width');

    for(var i=1; i<=2; i++){

      if (localStorage.getItem('ground' + i) != null && localStorage.getItem('ground' + i) != '') {
        document.getElementById('resume_solImage' + i).src = '../image/furnitures/ground/Carrelage' + i + '.jpg';
        document.getElementById('resume_solDiv' + i).innerHTML = 'Carrelage ' + i;
        prix = prix + localStorage.getItem('width') / 100 * localStorage.getItem('length')/100 * 20;
      }
      else{
        document.getElementById('resume_sol'+i ).style.display = 'none';
      }

    }
    if (localStorage.getItem('ground' + 3) != null && localStorage.getItem('ground' + 3) != '') {
      document.getElementById('resume_solImage' + 3).src = '../image/furnitures/ground/parquet'  + '.jpg';
      document.getElementById('resume_solDiv' + 3).innerHTML = 'Parquet ' + 1;
      prix = prix + localStorage.getItem('width') / 100 * localStorage.getItem('length') / 100 * 30;

    }
    else {
      document.getElementById('resume_sol3').style.display = 'none';
    }

    if (localStorage.getItem('height') != null && localStorage.getItem('height') != ''){
      document.getElementById('resume_height').innerHTML = localStorage.getItem('height');
      if (localStorage.getItem('nbColor')!=0){
        for (var i = 1; i <= localStorage.getItem('nbColor'); i++){
          document.getElementById('resume_color' + i).style.backgroundColor=localStorage.getItem('color'+i);
        }
        for (var i = 5; i > localStorage.getItem('nbColor'); i--) {
          document.getElementById('resume_color' + i).style.display ='none';
        }
        prix = prix + 2 * localStorage.getItem('width')/100 * localStorage.getItem('height')/100 + 2 * localStorage.getItem('length')/100 * localStorage.getItem('height')/100;
        prix = prix * 15;
        prix = prix + localStorage.getItem('nbColor')*40;
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
      document.getElementById('resume_image' + i).src = '../image/furnitures/bed/bed'+i+'.jpg';
      document.getElementById('resume_name' + i).innerHTML = 'bed' + i;
      switch(i){
        case 1:
          prix = prix + 549;
          break;
        case 2:
          prix = prix + 325;
          break;
        case 3:
          prix = prix + 194;
          break;
      }
    }
    else {
      document.getElementById('resume_meuble' + i).style.display = 'none';
    }


    if (localStorage.getItem('table' + i) != null && localStorage.getItem('table' + i) != '') {
      document.getElementById('resume_image' + (i + 3)).src = '../image/furnitures/table/table' + i+'.jpg';
      document.getElementById('resume_name' + (i + 3)).innerHTML = 'table' + i;
      switch (i) {
        case 1:
          prix = prix + 149;
          break;
        case 2:
          prix = prix + 124;
          break;
        case 3:
          prix = prix + 290;
          break;
      }
    }
    else {
      document.getElementById('resume_meuble' + (i+3)).style.display = 'none';
    }

  }

//document.location.reload();
  document.getElementById('resume_price_value').innerHTML = ' '+ prix +' ';


}

