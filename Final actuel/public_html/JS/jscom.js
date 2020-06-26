document.querySelector("#envoi").addEventListener("click", miseAJourData, false);

function Verifnom() {
    var nom = document.getElementById("nom");
    nom.style.borderColor = "#ced4da";
    if (!nom.value) {
        $("#erreurnom").toggleClass("visible");
        nom.style.borderColor = "red";
        return n = false;
    } else {
        nom.style.borderColor = "green";
        return n = true;
    }
    window.addEventListerner("load", Verifnom);
}
;

function Verifprenom() {
    var prenom = document.getElementById("prenom");
    prenom.style.borderColor = "#ced4da";
    if (!prenom.value) {
        $("#erreurprenom").toggleClass("visible");
        prenom.style.borderColor = "red";
        
        return p = false;
    } else {
        prenom.style.borderColor = "green";
        return p = true;
    }
    window.addEventListerner("load", Verifprenom);
}
;

function Verifmessage() {
    var message = document.getElementById("msg");
    message.style.borderColor = "#ced4da";
    if (!message.value) {
        
        message.style.borderColor = "red";
       
        return m = false;
    } else {
        message.style.borderColor = "green";
        return m = true;
    }
    window.addEventListerner("load", Verifmessage);
}
;

function Valid(m, p, n) {
    if (m === true && p === true && n === true) {
        alert("Le formulaire va être envoyé !");
        document.envoi.submit();
    }
    window.addEventListerner("load", Valid);
}
;
function resetForm() {
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var message = document.getElementById("msg");

    document.getElementById("form").reset();
    $("#erreurprenom").removeClass("visible");
    $("#erreurnom").removeClass("visible");
    $("#erreurmessage").removeClass("visible");
    nom.style.borderColor = "#ced4da";
    prenom.style.borderColor = "#ced4da";
    message.style.borderColor = "#ced4da";
    window.addEventListerner("load", resetForm);
}
;



var valeurselect = document.getElementById("com3").value;
var comment = document.getElementById("msg").value;

function valetoile(a){
   if(a===1){
       localStorage.setItem(valeurselect + "_etoile", 1);
   }
   else if(a===2){
       localStorage.setItem(valeurselect + "_etoile", 2);
   }
   else if(a===3){
       localStorage.setItem(valeurselect + "_etoile", 3);
   }
   else if(a===4){
       localStorage.setItem(valeurselect + "_etoile", 4);
   }
   else if(a===5){
       localStorage.setItem(valeurselect + "_etoile", 5);
   }
    
}

function miseAJourData() {
    if (comment.value !== "") {
        localStorage.setItem(valeurselect + "_commentaire", comment.value);
    }
}






